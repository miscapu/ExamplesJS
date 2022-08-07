// div than let's print in display conditionally
const printDiv  =   '<div>Free Shipping</div>';

if ( country && country.textContent.trim() === 'New York' )
{
    document.querySelector( '#country' ).insertAdjacentHTML( 'afterend', printDiv );
}