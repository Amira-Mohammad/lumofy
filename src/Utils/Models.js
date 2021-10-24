// Course: id, name, thumbnail, description, data, nonAdminUsersCanEnroll

export class course {
    constructor(id, name, thumbnail, description, data, nonAdminUsersCanEnroll) {
        this.id = id;
        this.name = name;
        this.thumbnail = thumbnail;
        this.description = description;
        this.data = data;
        this.nonAdminUsersCanEnroll = nonAdminUsersCanEnroll;
    }
}

export class user {
    constructor(id, name, username, password, isAdmin) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}