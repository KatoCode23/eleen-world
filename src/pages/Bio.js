import React from 'react';
import '../styles/bio.css';
import Menu from '../components/menu/Menu';

export default class Bio extends React.Component{
    render() {
        return (

            <div className="bio-content">
                <Menu />
                <div className="bio-container">
                    <div className="bio">
                        <p className="bio-text">
                            <strong>Eleen Halvorsen </strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent pulvinar est nunc, id blandit neque vestibulum sit amet.
                        Nulla facilisi. Etiam convallis sem id neque efficitur,
                        nec tincidunt justo porttitor. Phasellus luctus at urna non congue.
                        Vestibulum non justo eu sem malesuada feugiat.
                        Nunc consequat neque sed iaculis tempor. In sed accumsan dolor.
                        Donec mollis ipsum vel feugiat fermentum. Donec nec luctus tellus.
                        Nulla viverra, nulla ut posuere fermentum, risus urna suscipit magn a,
                        at vulputate est libero nec diam. Phasellus faucibus laoreet massa,
                        sed tempus augue fringilla ac. Donec ligula eros, lobortis at mi sit amet,
                        convallis molestie orci. Donec ac aliquam risus, ut pellentesque metus.
                        Mauris id elit interdum, dictum nulla non, pulvinar ipsum.
                        </p>
                        <p className="bio-text">
                        Duis vel nulla id lectus convallis viverra eget ac turpis.
                        Maecenas rutrum, massa et ornare consequat, lacus urna ultricies justo,
                        at luctus turpis felis consectetur justo. Fusce tempus lobortis mauris
                        vitae scelerisque. Praesent dolor diam, luctus ac varius et,
                        accumsan eget nisl. Aenean quis arcu sapien. Donec venenatis
                        augue a tortor vulputate molestie. Morbi commodo ut lacus vitae egestas.
                        Fusce ac gravida diam. Nulla sit amet fringilla enim. In malesuada,
                        est convallis  tempor iaculis, lorem nibh mattis sem, ac iaculis
                        ligula quam at purus. Aliquam sit amet fermentum libero. Nulla facilisi.
                        Suspendisse lectus risus, tincidunt non tristique ac, elementum vitae ex.
                        </p>
                        <p className="bio-text">
                        Ut eget risus nec arcu sodales fermentum sed et purus.
                        Nam libero magna, blandit sed augue et, fringilla pulvinar lacus.
                        Duis vestibulum elit et tempus rutrum. Nam imperdiet malesuada vehicula.
                        Vestibulum accumsan cursus pellentesque. In ornare a felis vitae aliquam.
                        Donec eget nisi erat. Sed sodales semper ipsum, id vehicula dolor vehicula id.
                        Donec tincidunt lacus eros. Duis ut euismod nisl. Nunc scelerisque elementum
                        eros, vel ornare tellus lobortis sed.
                        </p>
                    </div>
                </div>
            </div>
        );

    }
}
