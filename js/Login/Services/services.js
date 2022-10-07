export const uniqueUser = (userEmail) =>{
    const userList = JSON.parse(localStorage.getItem('user')) || []
    let unique = true
    userList.forEach(user => {
        if(user.email == userEmail){
            unique = false
        }
    });
    return unique
}
