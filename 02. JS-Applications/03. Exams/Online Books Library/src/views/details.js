import {html, nothing} from '../../node_modules/lit-html/lit-html.js'
import * as bookService from '../services/books.js'

const detailsTemplate = (book,onDelete) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${book.isOwner ?html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>` : nothing}
            

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`
export async  function detailsPage(ctx){ // първо направи  ако е създател на игра да вижда бутоните
    const bookId = ctx.params.id;
    const book = await bookService.getById(bookId)

    if(ctx.user){
        book.isOwner = ctx.user._id == book._ownerId
    }

    async function onDelete(){ // най лесно е във view Template при click
       const choice =  confirm('Are you sure you want to del')

       if (choice) {
           await bookService.deleteById(bookId)
           ctx.page.redirect('/')
       }
     
    }
    ctx.render(detailsTemplate(book,onDelete))
}