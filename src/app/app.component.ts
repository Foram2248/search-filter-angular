import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import contacts from '../assets/contacts.json';

interface Contact {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  contacts: Contact[] = contacts;
  filteredContacts: Contact[] = contacts;
  selectedRows: Contact[] = [];
  displayedColumns: string[] = ['select', 'name', 'dob', 'address', 'city', 'state', 'zip', 'email', 'phone'];

  pageSize: number = 5; 
  currentPage: number = 1; 

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => {
      this.filterContacts(value);
    });
  }

  // Create method to filter contacts based on search criteria
  filterContacts(filters: any) {
    this.filteredContacts = this.contacts.filter((contact) =>
      Object.keys(filters).every((key) =>
        contact[key as keyof Contact]?.toLowerCase().includes(filters[key]?.toLowerCase() || '')
      )
    );
    this.currentPage = 1; 
  }

  // Create method to handle pagination
  get paginatedContacts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredContacts.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredContacts.length / this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  // Create method to handle toggle functionality 
  toggleRowSelection(contact: Contact, isChecked: boolean) {
    if (isChecked) {
      this.selectedRows.push(contact);
    } else {
      this.selectedRows = this.selectedRows.filter((row) => row !== contact);
    }
  }

  isSelected(contact: Contact): boolean {
    return this.selectedRows.includes(contact);
  }

  toggleSelectAll(isChecked: boolean) {
    if (isChecked) {
      this.selectedRows = [...this.paginatedContacts];
    } else {
      this.selectedRows = [];
    }
  }

  isAllSelected(): boolean {
    return this.paginatedContacts.every((contact) => this.isSelected(contact));
  }

  isSomeSelected(): boolean {
    return this.paginatedContacts.some((contact) => this.isSelected(contact)) && !this.isAllSelected();
  }
}
