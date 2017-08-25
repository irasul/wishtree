<?php

class Member_model extends CI_Model {

    /**
    * Validate the login's data with the database
    * @param string $user_name
    * @param string $password
    * @return void
    */
	
    function get_events()
    {
        $dayNex = date('Y-m-d', strtotime('+2 days'));
        $dayPre = date('Y-m-d', strtotime('-2 days'));

        $this->db->select('*');
        $this->db->from('events');
        $this->db->where('date_time>', $dayPre);
        $this->db->where('date_time<', $dayNex);
        $query = $this->db->get();
		return $query->result_array();       
    }

}
