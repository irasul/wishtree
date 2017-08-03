<?php

class Admin_model extends CI_Model {

    /**
    * Validate the login's data with the database
    * @param string $user_name
    * @param string $password
    * @return void
    */
	function get_members($search_str=null,$limit_start, $limit_end)
	{
		
		$this->db->select('*');
		$this->db->from('users');
        if($search_str){
            $this->db->like('first_name', $search_str);
            $this->db->or_like('email_addres', $search_str);
        }
        $this->db->limit($limit_start, $limit_end);
		$query = $this->db->get();
		return $query->result_array(); 
		
	}

	function count_members($search_str=null)
    {
        $this->db->select('*');
        $this->db->from('users');
        if($search_str){
            $this->db->like('first_name', $search_str);
            $this->db->or_like('email_addres', $search_str); 
        }
        $query = $this->db->get();
        return $query->num_rows();        
    }

    function get_works($search_str=null,$limit_start, $limit_end)
	{
		
		$this->db->select('*');
		$this->db->from('works');
        if($search_str){
            $this->db->like('title', $search_str);
            $this->db->or_like('description', $search_str);
        }
        $this->db->limit($limit_start, $limit_end);
		$query = $this->db->get();
		return $query->result_array(); 
		
	}

	function count_works($search_str=null)
    {
        $this->db->select('*');
        $this->db->from('works');
        if($search_str){
            $this->db->like('title', $search_str);
            $this->db->or_like('description', $search_str); 
        }
        $query = $this->db->get();
        return $query->num_rows();        
    }

	function member_signup()
	{

		$new_member_insert_data = array(
			'first_name' => $this->input->post('first_name'),
			'last_name' => $this->input->post('last_name'),
			'email_addres' => $this->input->post('email_address'),			
			'user_name' => $this->input->post('username'),
			'pass_word' => md5($this->input->post('password')),
			'user_role' => 'member',
			'created_at' => date('Y/m/d H:i:s')							
		);
		$insert = $this->db->insert('users', $new_member_insert_data);
	    return $insert;

	}
    
    function add_event($event_data)
    {
        $insert = $this->db->insert('events', $event_data);
	    return $insert;
    }
    
    function add_tournament($tournament_data)    
    {
        $insert = $this->db->insert('tournaments', $tournament_data);
        return $insert;
    }
    
    function get_tournament(){        
        $key = $this->input->post('search');
        $this->db->select('title,type');
        $this->db->from('tournaments');
        $this->db->like('title', $key);
        $query = $this->db->get();
        return $query->result_array();
    }

}
