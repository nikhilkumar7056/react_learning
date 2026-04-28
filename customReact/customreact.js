function customRander(reactElement,conatiner){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.child;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // conatiner.append(domElement)
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.child;
    for(let attr in reactElement.props){
        domElement.setAttribute(attr,reactElement.props[attr])
    }
    conatiner.append(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "Google"
    },
    child: "click here go to google"
}
const mainContainer = document.querySelector('.root')

customRander(reactElement, mainContainer);