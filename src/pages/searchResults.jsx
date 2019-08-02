import React from "react";
import '../css/searchResults.css';

const ResultsPage = () => {
    return (
        <div className="Results">
            <nav>
                <div className="container-fluid">
                    <form action="/action_page.php">
                    <div className="row">
                        <div id="searchBar" className="col-lg text-center">
                            <input type="text" name="search" placeholder="Search your craving" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg text-center">
                            <span>Distance:</span><br />
                            <input type="text" name="distance" placeholder="15mi" />
                        </div>
                        <div className="col-lg text-center">
                            <span>Rating:</span><br />
                            <select className="drop" >
                                <option value="1">&#128970;</option>
                                <option value="2">&#128970;&#128970;</option>
                                <option value="3">&#128970;&#128970;&#128970;</option>
                                <option value="4">&#128970;&#128970;&#128970;&#128970;</option>
                                <option value="5">&#128970;&#128970;&#128970;&#128970;&#128970;</option>
                            </select>
                        </div>
                        <div className="col-lg text-center">
                            <span>Price:</span><br />
                            <select className="drop">
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                                <option value="5">$$$$$</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </nav>

        <div id="side-menu" className="side-nav">
            <h1>Favorites List</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom myBtn style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">Lolita Cocina & Tequila Bar Fort Point</h5>
                                <p className="card-text">
                                    (617) 819-8226
                                </p>
                                <a href="#" className="card-link">Restaraunt Link</a>
                                <a href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div id="star" className="col-lg-1 text-center">
                        &#128970;
                    </div>
                </div>
            </div>
        </div>

        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom myBtn style=" style={{width:'5rem'}}> 
                            <div className="card-body">
                                <h5 id="card-title1">Card title</h5>
                                <p id="card-location1">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url1" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map1" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title2">Card title</h5>
                                <p id="card-location2">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url2" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map2" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title3">Card title</h5>
                                <p id="card-location3">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url3" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map3" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title4">Card title</h5>
                                <p id="card-location4">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url4" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map4" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title5">Card title</h5>
                                <p id="card-location5">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url5" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map5" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title6">Card title</h5>
                                <p id="card-location6">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url6" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map6" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title7">Card title</h5>
                                <p id="card-location7">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url7" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map7" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title8">Card title</h5>
                                <p id="card-location8">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url8" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map8" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title9">Card title</h5>
                                <p id="card-location9">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url9" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map9" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title10">Card title</h5>
                                <p id="card-location10">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url10" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map10" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                            <div className="card-body">
                                <h5 id="card-title11">Card title</h5>
                                <p id="card-location11">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a  target="_blank" id="url11" href="#" className="card-link">Restaraunt Link</a>
                                <a target="_blank" id="map11" href="#" className="card-link">Google Maps</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                            <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                                <div className="card-body">
                                    <h5 id="card-title12">Card title</h5>
                                    <p id="card-location12">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a  target="_blank" id="url12" href="#" className="card-link">Restaraunt Link</a>
                                    <a target="_blank" id="map12" href="#" className="card-link">Google Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg">
                            <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                                <div className="card-body">
                                    <h5 id="card-title13">Card title</h5>
                                    <p id="card-location13">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a  target="_blank" id="url13" href="#" className="card-link">Restaraunt Link</a>
                                    <a target="_blank" id="map13" href="#" className="card-link">Google Maps</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                                <div className="card-body">
                                    <h5 id="card-title14">Card title</h5>
                                    <p id="card-location14">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a  target="_blank" id="url14" href="#" className="card-link">Restaraunt Link</a>
                                    <a target="_blank" id="map14" href="#" className="card-link">Google Maps</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div data-toggle="modal" data-target="#exampleModal" className="card text-center mx-auto bg-custom style=" style={{width:'5rem'}}>
                                <div className="card-body">
                                    <h5 id="card-title15">Card title</h5>
                                    <p id="card-location15">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <a  target="_blank" id="url15" href="#" className="card-link">Restaraunt Link</a>
                                    <a target="_blank" id="map15" href="#" className="card-link">Google Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Lolita Cocina & Tequila Bar Fort Point</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>&#128970; &#128970; &#128970; &#128970; $ $</p>
                            <p>Vibrant, trendy lounge offering Mexican-inspired eats & a lengthy tequila list amid Gothic decor.</p>
                        </div>
                        <div className="modal-footer">
                            <a href="https://google.com" target="_blank">Visit site</a>
                            <a href="https://google.com" target="_blank">Google Maps</a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="leftdiv">
                    <a href="home.html" className="gh">Home</a>
                    <a href="about.html" className="gh">About</a>
                    <a href="#" onclick="openSlideMenu()" className="gh">Favorites</a>
                </div>

                <div className="rightdiv">
                    <a href="http://google.com" className="gh">Prev</a>
                    <a href="http://google.com" className="gh">Next</a>
                </div>
            </footer>

        </div>
    );
};

export default ResultsPage;