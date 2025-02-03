type Review = number | boolean

function showUserReview(review: Review){
    if(!review){
        console.log("Você não avaliou o produto")
        return
    }

    console.log(`A nota que você deu foi ${review}, obrigado`)

}

showUserReview(false)
showUserReview(5)
showUserReview(2)