package org.example;

import java.sql.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) throws SQLException {

        String query = "SELECT * FROM data WHERE subject_name = 'Trupti'";
        String url = "jdbc:mysql://localhost:3306/jdbctest";
        String user = "root";
        String password = "mysql";

        Connection con = DriverManager.getConnection(url,user,password);
        Statement st = con.createStatement();
        ResultSet rs =  st.executeQuery(query);
        rs.next();

        String name = rs.getString(2);
        System.out.println(name);


    }
}