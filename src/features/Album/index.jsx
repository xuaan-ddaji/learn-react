import React from 'react';
import AlbumList from './components/AlbumList';
//import PropTypes from 'prop-types';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Thả mình cùng những giai điệu',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/3/2/de320c7f69ddf70a91f62aec66085422.jpg',
        },
        {
            id: 2,
            name: 'Nhạc Việt "lâu phai"',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
        },
        {
            id: 1,
            name: 'Alo alo đây là tổng đài nhạc',
            thumnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/8/a/ad8aded71985e32997c8d09b9078dfbe.jpg',
        },
    ]

    return (
        <div>
            <h2>Music</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;