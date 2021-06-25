import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <img class="logo" src="https://image.freepik.com/free-vector/online-shop-logo-template_59362-86.jpg" />
            <ul class="navigation">
                <li class="nav-item">
                    <button class="shopping-cart">
                        <i class="fas fa-shopping-basket"></i>
                    </button>
                </li>
                <li class="nav-item">
                    <a href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a href="#">Register</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;