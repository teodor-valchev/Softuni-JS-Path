class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    let article = {
      articleModel,
      articleName,
      quantity,
    };
    articleModel = articleModel.toLowerCase();
    let findArtickle = this.listOfArticles.find(
      (x) => x.articleName == articleName && x.articleModel == articleModel
    );

    if (!this.possibleArticles[articleModel]) {
      throw new Error("This article model is not included in this gallery!");
    }
    if (findArtickle) {
      findArtickle.quantity += quantity;
    }
    this.listOfArticles.push(article);

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }
  inviteGuest(guestName, personality) {
    if (this.guests.some((x) => x.guestName == guestName)) {
      throw new Error(`${guestName} has already been invited.`);
    }
    let guest = {
      guestName,
      points: 0,
      purchaseArticle: 0,
    };
    if (personality === "Vip") {
      guest.points = 500;
    } else if (personality === "Middle") {
      guest.points = 250;
    }
    this.guests.push(guest);
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find(
      (x) => x.articleName == articleName && x.articleModel == articleModel
    );
    let guest = this.guests.find((x) => x.guestName == guestName);
    let artPoints = this.possibleArticles[articleModel];

    if (!article) {
      throw new Error("This article is not found.");
    }
    if (article.quantity == 0) {
      return `The ${articleName} is not available.`;
    }
    if (!guest) {
      return "This guest is not invited.";
    }

    if (guest.points <= article.points) {
      return "You need to more points to purchase the article.";
    }
    guest.points -= artPoints;
    article.quantity--;
    guest.purchaseArticle++;
    return `${guestName} successfully purchased the article worth ${artPoints} points.`;
  }
  showGalleryInfo(criteria) {
    let result = [];
    if (criteria == "article") {
      let article = "Articles information:";
      result.push(article);
      this.listOfArticles.forEach((x) =>
        result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`)
      );
    } else if (criteria == "guest") {
      let guestInfo = "Guests information:";
      result.push(guestInfo);
      this.guests.forEach((x) =>
        result.push(`${x.guestName} - ${x.purchaseArticle}`)
      );
    }

    return result.join("\n");
  }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

