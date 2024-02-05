function LikeButton() {
    // React 는 react.delvlopment 에 정의되어 있는 내용을 사용
    const [liked, setLiked] = React.useState(false); 
    const text = liked ? '좋아요 취소' : '좋아요';

    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked)},
        text, 
    );

}

// 3개의 요소를 생성할 때는 리액트 안에서 해결하는 게 좋다. 아래와 같은 방법
const domContainer = document.getElementById('root');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton)
    ),
    domContainer,
);
    


// 보통은 dom 요소 하나에 렌더링을 하게 되지만, 아래와 같은 사용법도 가능함.
// 레거시 프로젝트를 리액트로 포팅 할 때 사용 가능

// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1);
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2);
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3);


// React.createElement(
//     'div'
//     , null
//     ,React.createElement('p', null, 'hello')
//     ,React.createElement('p', null, 'world')
// )

