<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
        $this->load->model('member_model');
    }
	function index()
	{
        	echo "Error";
	}

    /**
    * encript the password 
    * @return mixed
    */	
    function __encrip_password($password) {
        return md5($password);
    }	

    /**
    * check the username and the password with the database
    * @return void
    */
	function validate_credentials()
	{	
        $content = json_decode(file_get_contents("php://input"));
		
        $user_name = $content->user;
		$password = $this->__encrip_password($content->pass);


		//print_r($user_name."-".$password);
		
		$is_valid = $this->User_model->validate($user_name, $password);
		
		//print_r();
	    if($is_valid != false)
		{
			$data = array(
				'user_name' => $user_name,
				'user_id' => $is_valid[0]['id'],
				'first_name' => $is_valid[0]['first_name'],
				'is_logged_in' => true,
				'user_role' => $is_valid[0]['user_role'],
			);
			$this->session->set_userdata($data);
			if($is_valid[0]['user_role'] == 'admin'){
				//redirect('admin/home');
				echo json_encode($data);
			}else if($is_valid[0]['user_role'] == 'member'){
				redirect('member');
			}else{
				echo $user_name;
			}
            
		}
		else // incorrect username or password
		{
			//$data['message_error'] = TRUE;
			//$data['main_content'] = 'site/login';
        	//$this->load->view('template/template', $data);
        	echo "NO_USER";
		}
	}	

    /**
    * The method just loads the signup view
    * @return void
    */
	function signup()
	{
		$data['main_content'] = 'site/registration';
        $this->load->view('template/site_template', $data);	
	}
	

    /**
    * Create new user and store it in the database
    * @return void
    */	
	function member_signup()
	{
		$this->load->library('form_validation');
		
		// field name, error message, validation rules
		$this->form_validation->set_rules('first_name', 'First Name', 'trim|required');
		$this->form_validation->set_rules('last_name', 'Last Name', 'trim|required');
		$this->form_validation->set_rules('email_address', 'Email Address', 'trim|required|valid_email|is_unique[users.email_address]');
		$this->form_validation->set_rules('username', 'Username', 'trim|required|min_length[5]|is_unique[users.user_name]');
		$this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]|max_length[32]');
		$this->form_validation->set_rules('password2', 'Password Confirmation', 'trim|required|matches[password]');
		$this->form_validation->set_message('is_unique', 'The %s is already taken');
		$this->form_validation->set_error_delimiters('<div class="alert alert-error"><a class="close" data-dismiss="alert">×</a><strong>', '</strong></div>');
		
		if($this->form_validation->run() == FALSE)
		{
			$data['main_content'] = 'site/registration';
        	$this->load->view('template/site_template', $data);
		}
		
		else
		{	
			$key = md5(uniqid());
            $config = array (
              'mailtype' => 'html',
              'charset'  => 'utf-8',
              'priority' => '1'
               );
            $this->email->initialize($config);
            $this->email->from('signup@onesports24.com', 'One Sports 24');
            $this->email->to($this->input->post('email_address'));
            $this->email->subject('Confirm your account.');                
            $message = "<p>Thank you for Registration</P>";
            $message .= "<p><a href='".base_url()."user/activation/$key'> Click here </a>to confirm your account.</P>";
            $this->email->message($message);		
			
			if($query = $this->user_model->member_signup($key))
			{			
				if($this->email->send()){
					$data['main_content'] = 'site/registration_success';
	        		$this->load->view('template/site_template', $data);	
        		}		
			}
			else
			{   $data['signup_error'] = $query;
				$data['main_content'] = 'site/registration';
        		$this->load->view('template/site_template', $data);		
			}
		}
		
	}
	function user_register($key)
	{
        if($this->user_model->is_key_valid($key)){
            if($data = $this->model_users->add_user($key)){
                
            $data[] = $data;

            $data['is_log_in'] = 1;
            
            $this->session->set_userdata($data);
            if ($data['user_role']=='admin'){
                redirect('welcome/admin');
            }elseif ($data['user_role']=='member'){
                redirect('welcome');
            }else{
                
                redirect('welcome/restricted'); 
            }    
                
            }else {echo "Failed to add you as member please try again later";}
        }else {echo "Invalid key";}            
           
    }
    
    // Forget password code        
    function recover(){
            //Loads the view for the recover password process.
    	    $this->load->view('user/forget_password');
	   }
	function recover_password(){
	    $this->load->library('form_validation');
	    $this->form_validation->set_rules('email', 'Email', 'required|trim|valid_email|xss_clean');

            //check if email is in the database
            $this->load->model('model_users');
            if($this->model_users->email_exists()){
            //$them_pass is the varible to be sent to the user's email 
            $temp_pass = md5(uniqid());
             
            $config = array (
                  'mailtype' => 'html',
                  'charset'  => 'utf-8',
                  'priority' => '1'
                   );
            $this->email->initialize($config);
            $this->email->from('password@upcomingz.com', "Chandraghona Forum reset password");
            $this->email->to($this->input->post('email'));
            $this->email->subject("Reset your Password");

            $message = "<p>This email has been sent as a request to reset our password</p>";
            $message .= "<p><a href='".base_url()."welcome/reset_password/$temp_pass'>Click here </a>if you want to reset your password,
                        if not, then ignore</p>";
            $this->email->message($message);

            if($this->email->send()){
                $this->load->model('model_users');
                if($this->model_users->temp_reset_password($temp_pass)){
                    echo "check your email for instructions, thank you";
                }
            }
            else{
                echo "email was not sent, please contact your administrator";
            }

            }else{
            echo "your email is not in our database";
            }
	}
	function reset_password($temp_pass){
   	    $this->load->model('model_users');
    	    if($user_data['results'] = $this->model_users->is_temp_pass_valid($temp_pass)){
		
		$data['id'] = $user_data['results']['0']->id;
                $data['name'] = $user_data['results']['0']->name;
                $data['email'] = $user_data['results']['0']->email;
                $data['user_role'] = $user_data['results']['0']->user_role;
            	$this->load->view('user/reset_password', $data);
            	

           }else{
           echo "the key is not valid";    
           }

        }
	function update_password(){
	    //$temp_pass = $temp_pass;
	    $this->load->library('form_validation');
	    $this->form_validation->set_rules('id', 'Id');
        $this->form_validation->set_rules('password', 'Password', 'required|trim|min_length[8]');
        $this->form_validation->set_rules('cpassword', 'Confirm Password', 'required|trim|min_length[8]|matches[password]');
        if($this->form_validation->run()){
        $this->load->model('model_users');
        if($this->model_users->set_update_password()){ 
            redirect('welcome/login');
        }else {echo "We are unable to reset yor password, please try again later";}
        }else{
        echo "Passwords do not match";  
        }
	}


	function home()
	{
		$data['main_content'] = 'site/home';
        $this->load->view('template/site_template', $data);
	}
    
    function about()
	{
		$data['main_content'] = 'site/about';
        $this->load->view('template/site_template', $data);
	}

	function news()
	{
		$data['main_content'] = 'site/news';
        $this->load->view('template/site_template', $data);
	}

    function events()
    {
        $data['events'] = $this->member_model->get_events();
        $data['main_content'] = 'site/events';
        $this->load->view('template/site_template', $data);
    }

    function events_data()
    {
        $events = $this->member_model->get_events();
        echo json_encode($events);
    }
    
    function copyright()
    {
        $data['main_content'] = 'site/copyright';
        $this->load->view('template/site_template', $data);
    }
    
    function privacy()
    {
        $data['main_content'] = 'site/privacy';
        $this->load->view('template/site_template', $data);
    }
    
    function termsnconditions()
    {
        $data['main_content'] = 'site/termsnconditions';
        $this->load->view('template/site_template', $data);
    }

    function inactive()
    {
        $data['main_content'] = 'site/inactive';
        $this->load->view('template/site_template', $data);
    }
	
	function pageerror()
	{
		$data['main_content'] = 'site/404.php';
        $this->load->view('template/site_template', $data);
	}
		
	function restricted()
	{
		$data['main_content'] = 'site/restricted';
        $this->load->view('template/site_template', $data);
	}
	
	/**
    * Destroy the session, and logout the user.
    * @return void
    */		
	function logout()
	{
		$this->session->sess_destroy();
		redirect('welcome');
	}

}