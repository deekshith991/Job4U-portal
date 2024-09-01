import '../css/HomePage.css';



const HomeView = () => {

    return (
        <div className="homeView">



            <div className="imageSlider">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv1CnoGe3d-AMeUj24Vwk5qsXXdlJBgsgIw&s" class="d-block w-100 images" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://webfeb.in/wp-content/uploads/2016/09/job-portal-1.jpg" class="d-block w-100 images" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3lwLIT4cRW62v4mlvjwK4MaEyEi1HE52wA&s" class="d-block w-100 images" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>

                    <div>
                        <h1 className='summary'>Summary</h1>
                        <p className='paragraphs'>In 1999, Monster.com ran on three 30 second Super Bowl ads for four million dollars.[9] One ad which featured children speaking like adults, drolly intoning their dream of working at various dead-end jobs to humorous effect were far more popular than rival Hotjobs.com ad about a security guard who transitions from a low paying security job to the same job at a fancier building.[10] Soon thereafter, Monster.com was elevated to the top spot of online employment sites.[11] Hotjobs.com's ad wasn't as successful, but it gave the company enough of a boost for its IPO in August.[12]

                            After being purchased in a joint venture by Knight Ridder and Tribune Company in July,[13] CareerBuilder absorbed competitor boards CareerPath.com and then Headhunter.net which had already acquired CareerMosaic. Even with these aggressive mergers CareerBuilder still trailed behind the number one employment site Jobsonline.com, number two Monster.com and number three Hotjobs.com.[14]</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeView;
