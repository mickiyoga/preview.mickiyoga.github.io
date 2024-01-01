addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");

    document.getElementById("copyright-year")
        .textContent = new Date().getFullYear();

    document.querySelectorAll(".modal-opener").forEach(element => {
        element.addEventListener("click", () => {
            showArticle(modal, element.dataset.showArticleId);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.code === 'Escape') {
            closeModal(modal);
        }
    });

    document.querySelectorAll(".modal-background").forEach(element => {
        element.addEventListener("click", () => closeModal(modal));
    });
});

function showArticle(modal, id) {
    modal.querySelectorAll("article").forEach(article => {
        article.classList.toggle(
            "is-hidden", 
            article.id !== id
        );
    });
    
    modal.classList.toggle(
        "is-active", 
        modal.querySelectorAll("article:not(.is-hidden)").length
    );
}

function closeModal(modal) {
    modal.classList.remove("is-active");
}
