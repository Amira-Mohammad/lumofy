
import { user, course } from './Models';

export const Users = [
    new user(
        'Amira',
        'Amira',
        'Amira Mohamed',
        "123456",
        true
    )
    ,
    new user(
        'Doaa',
        'Doaa',
        'Doaa Mohamed',
        "123456",
        false
    )
    ,
    new user(
        'Esraa',
        'Esraa',
        'Esraa Mohamed',
        "123456",
        false

    )

]

export const Courses = [
    new course(
        'react',
        'react',
        'https://ipfs.io/ipfs/QmegVB1fLSYPwpJUBBd9K7H19Q5EZehG1BcUXkyMhN69xR',
        "ReactJS is JavaScript library used for building reusable UI components.",
        "",
        true
    )
    ,
    new course(
        'JavaScript',
        'JavaScript',
        'https://ipfs.io/ipfs/QmZGrxEw52r9NomjMscrjGGXW9kiqZ82JyJDyn2U8Zw1Rk',
        "JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server.",
        "",
        true
    )
    ,
    new course(
        'Json',
        'Json',
        'https://ipfs.io/ipfs/QmaWMqXWwCSSDFZ8N8bAjfX3jQowJ8fjbDfnBQmZP8vdC6',
        "JSON stands for J ava S cript O bject N otation. JSON is a lightweight format for storing and transporting data.",
        "",
        true
    )

]
