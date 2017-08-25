<?php

class User_model extends CI_Model {

    /**
    * Validate the login's data with the database
    * @param string $user_name
    * @param string $password
    * @return void
    */
	function validate($user_name, $password)
	{
		$this->db->where('user_name', $user_name);
		$this->db->where('pass_word', $password);
		$query = $this->db->get('users');
		
		if($query->num_rows()>0){
			return $query->result_array();
		}else {return false;}
				
	}

    /**
    * Store the new user's data into the database
    * @return boolean - check the insert
    */	
	function member_signup($key)
	{
		$new_member_data = array(
			'first_name' => $this->input->post('first_name'),
			'last_name' => $this->input->post('last_name'),		
			'user_name' => $this->input->post('username'),
			'email_address' => $this->input->post('email_address'),			
			'pass_word' => md5($this->input->post('password')),
			'user_role' => 'inactive',
			'created_at' => date('Y/m/d H:i:s'),
			'updated_at' => date('Y/m/d H:i:s'),
			'active_key' => $key							
		);
		$insert = $this->db->insert('users', $new_member_data);
	    return $insert;

	}

	function is_key_valid($key){
        
        $this->db->where('active_key', $key);
        $query = $this->db->get('users');
        if ($query->num_rows() == 1) {
            return true;
        }else {return false;}
    }

    function active_member($key){        
        $update_member_data = array(
			
			'user_role' => 'member',
			'updated_at' => date('Y/m/d H:i:s'),
			'active_key' => 'activated'							
		);
        $this->db->where('active_key', $key);
		$query = $this->db->update('users',$update_member_data);
        if ($query) {
            return true;
        }else{return false;}
    }

}
