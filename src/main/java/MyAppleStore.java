import java.util.Scanner;

class Customer{
    String name;

    public void helloCus(){
        System.out.println("Hello " + name + ". How can I help you?");
    }
}

public class MyAppleStore {
    public static void main(String[] args) {
        // Introduction
        System.out.println("-- Welcome to my Apple Store --");

        // User input
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your before the entrance: ");
        String name1 = sc.nextLine();

        // Creating objects
        Customer kabbo = new Customer();

        // Set attribute for Kabbo
        kabbo.name = name1;

        // Method calling from our custom class
        kabbo.helloCus();
    }
}
