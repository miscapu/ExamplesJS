// create element div
const divFrete  =   document.createElement( 'div' );
const txtFrete  =   document.createTextNode( 'Free Shipping' );

divFrete.appendChild( txtFrete );
divFrete.classList.add( 'freteGratis' );

//Search elements with classRJ into page
const theClientRio  =   document.querySelectorAll( '.classRJ' );
// sweeping array of elements with classRJ and isnsert a div free shipping
theClientRio.forEach( cl => {
    cl.appendChild( divFrete );
} );