class Story {
  #comments;
  #likes;
  countComments = 0;
  countReplies = 0;
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this.#comments = [];
    this.#likes = [];
  }
  get likes() {
    if (this.#likes.length == 0) {
      return `${this.title} has 0 likes`;
    }
    if (this.#likes.length == 1) {
      let username = this.#likes[0];
      return `${username} likes this story!`;
    } else {
      let username = this.#likes[0];
      return `${username} and ${this.#likes.length} others like this story!"`;
    }
  }
  like(username) {
    if (username == this.creator) {
      throw new Error("You can't like your own story!");
    }
    if (this.#likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }
    this.#likes.push(username);
    return `${username} liked ${this.title}!`;
  }
  dislike(username) {
    if (!this.#likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }
    let findUsername = this.#likes.indexOf(username);
    this.#likes.splice(findUsername, 1);
    return `${username} disliked ${this.title}`;
  }
  comment(username, content, id) {
    let idserch = this.#comments.find((x) => x.id == id);
    if (id == undefined || !idserch) {
      let comment = {
        id: ++this.countComments,
        username,
        content,
      };
      this.#comments.push(comment);
      return `${username} commented on ${this.title}`;
    }
    if (idserch) {
      let reply = {
        id: `${id}.${++this.countReplies}`,
        username,
        content,
      };
      this.#comments.push(reply);
      return "You replied successfully";
    }
  }
  toString(sortingType) {
    let result = [];
    result.push(`Title: ${this.title}`);
    result.push(`Creator: ${this.creator}`);
    result.push(`Likes: ${this.#likes.length}`);
    result.push("Comments:");
    let sorted = null;
    let values = null;
    if (sortingType == "asc") {
      sorted = this.#comments.sort((a, b) => a.id + b.id);
      values = Object.values(sorted);
      for (const person in values) {
        let info = values[person];
        result.push(`-- ${info.id}. ${info.username}: ${info.content}`);
      }
    } else if (sortingType == "desc") {
      sorted = this.#comments.sort((a, b) => b.id - a.id);
      values = Object.values(sorted);
      for (const person in values) {
        let info = values[person];
        result.push(`-- ${info.id}. ${info.username}: ${info.content}`);
      }
    } else if (sortingType == "username") {
      sorted = this.#comments.sort((a, b) =>
        a.username.localeCompare(b.username)
      );
      values = Object.values(sorted);

      for (const person in values) {
        let info = values[person];
        result.push(`-- ${info.id}. ${info.username}: ${info.content}`);
      }
    }

    return result.join("\n");
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
