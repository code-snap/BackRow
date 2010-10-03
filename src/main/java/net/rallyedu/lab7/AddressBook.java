package net.rallyedu.lab7;

import java.util.ArrayList;
import java.util.List;

public class AddressBook {
    private static List<Contact> contacts = new ArrayList<Contact>();

    public static List<Contact> getContacts() {
        return contacts;
    }

    public static Contact getContact(int id) {
        for(Contact contact : contacts) {
            if(contact.getId() == id) {
                return contact;
            }
        }
        return null;
    }

    public static void addContact(Contact contact) {
        contacts.add(contact);
    }

    public static void removeContact(Contact contact) {
        contacts.remove(contact);
    }
}
