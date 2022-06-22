const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

/*Colocamos entre chaves, podemos filtrar apenas os dados que interessam em um objeto */ 
function userId({id}) {
    console.log(id);
}
function getFullName({fullName: {firstName: first, lastName: last}}) {
    console.log(first, last);
}
userId(user)

getFullName(user)