import { html, render } from "../node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const root = document.querySelector("#contacts");

const contactTemplateCard = (data) => {
    return data.map(
            (c) => html` <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${c.name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id="${c.id}">
                <p>Phone number: ${c.phone}</p>
                <p>Email: ${c.email}</p>
                </div>
            </div>
            </div>`
    );
};

export function renderContacts() {
    render(contactTemplateCard(contacts), root);
} 
