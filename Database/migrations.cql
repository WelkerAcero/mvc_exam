CREATE KEYSPACE IF NOT EXISTS mvc_exam WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': '1'
};

USE mvc_exam;

CREATE TABLE mvc_exam.articles (
    idUser UUID,
    idArticle UUID,
    name TEXT,
 	description TEXT,
    PRIMARY KEY (idArticle, idUser)
);

CREATE TABLE mvc_exam.comments (
    idComment UUID,
    idUser UUID,
    idArticle UUID,
    comment TEXT,
    PRIMARY KEY (idComment, idUser, idArticle)
);

CREATE TABLE mvc_exam.users (
    idUser UUID,
    name TEXT,
    lastname TEXT,
    age INT,
    PRIMARY KEY (idUser)
);


CREATE TABLE mvc_exam.usersBlock (
    idUserBlock UUID,
    idUser UUID,
    idArticle UUID,
    PRIMARY KEY (idUserBlock, idUser, idArticle)
);

INSERT INTO mvc_exam.users(
    idUser,
    name,
    lastname,
    age
) VALUES (
    UUID(),
    'EXAMEN',
    'BACKEND',
    25
);

INSERT INTO mvc_exam.articles(
    idUser,
    idArticle,
    name,description
) VALUES (
    UUID(),
    UUID(),
    'EXAMEN',
    'BACKEND'
);


