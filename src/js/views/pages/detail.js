const Detail= {
    render() {
        return `
            <div class="content">
                <h2 class="content__heading">Detail Film</h2>
                <div id="movies"></div>
            </div>
        `;
    },

    async renderMovieContent() {
        console.log('sedang memuat detail film') ;
    }
};

export default Detail;