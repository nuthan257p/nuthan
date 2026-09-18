
const products = [
  { 
    id: 1, 
    name: 'Glen 4 Burner Gas Stove', 
    brand: 'Glen',
    type: 'Gas Stove',
    price: 14000, 
    image: 'https://glenindia.com/cdn/shop/files/1_5cf57af9-81fd-4f33-b265-a6fa02085ec4_1400x1400.jpg?v=1725272531',
    features: [
      '4 brass burners with auto ignition',
      'Stainless steel body',
      'Pan support for all vessel sizes',
      '1-year warranty'
    ]
  },
  { 
    id: 2, 
    name: 'Hafele 60cm Kitchen Chimney', 
    brand: 'Hafele',
    type: 'Kitchen Chimney',
    price: 27000, 
    image: 'https://assets.nikshanonline.com/wp-content/uploads/2024/12/Hafele-60-cm-Wall-Mounted-Chimney-Essentia-Series-RENATA-INCLINED-60-1.png',
    features: [
      '60cm width, 1300 m³/hr suction power',
      'Baffle filter for efficient oil collection',
      'Touch control panel with 3 speed settings',
      '2-year warranty'
    ]
  },
  { 
    id: 3, 
    name: 'Crompton 4 Burner Gas Stove', 
    brand: 'Crompton',
    type: 'Gas Stove',
    price: 22000, 
    image: 'https://www.crompton.co.in/cdn/shop/files/3d_78_4br.png?v=1727936802&width=1100',
    features: [
      '4 brass burners with auto ignition',
      'Crompton SensoSafe Gas Hob 3D 78cm 4 Burner',
      'Compact design for  kitchens',
      '2-year warranty'
    ]
  },
  { 
    id: 4, 
    name: 'Glen 4 Burner Stainless steel Gas Stove', 
    brand: 'Glen',
    type: 'Gas Stove',
    price: 21000, 
    image: 'https://glenindia.com/cdn/shop/files/1_3d518e85-3efc-4d07-82f1-3ddd8a1c4d40_1400x1400.jpg?v=1720501330',
    features: [
      '4  burners with auto ignition',
      'steel  top for easy cleaning',
      'Elegant mat finish',
      '2-year warranty'
    ]
  },
  { 
    id: 5, 
    name: 'Hafele 4 Burner Hob', 
    brand: 'Hafele',
    type: 'Gas stove',
    price: 29000, 
    image: 'https://decure.in/cdn/shop/files/hob_haf_verena_470_8098d588-3df7-4834-96c5-e81ffb1334ca.jpg?v=1721805955&width=823',
    features: [
      'Brass Burners',
      'Electric Auto Ignition',
      'Black Glass',
      '2-year warranty'
    ]
  },
  { 
    id: 6, 
    name: 'Crompton 90cm Kitchen Chimney', 
    brand: 'Crompton',
    type: 'Kitchen Chimney',
    price: 18999, 
    image: 'https://m.media-amazon.com/images/I/418x49tHKqL._SX679_.jpg',
    features: [
      '90cm width, 1626 m³/hr suction power',
      'Auto clean function',
      'LED lighting',
      '3-year warranty'
    ]
  },
  { 
    id: 7, 
    name: 'Glen Chimney 90cm', 
    brand: 'Glen',
    type: 'Kitchen Chimney',
    price: 24000, 
    image: 'https://glenindia.com/cdn/shop/products/1_7fc8719f-02bf-4cf3-a978-9b00653a8fc3_1400x1400.webp?v=1673353604',
    features: [
      'Touch controls with motion sensor, wave and start',
      '90cm width, 1400 m³/hr suction power',
      'Auto clean function',
      '1-year warranty'
    ]
  },
  { 
    id: 8, 
    name: 'Hafele 90 cm  Chimney', 
    brand: 'Hafele',
    type: 'Kitchen Chimney',
    price: 23000, 
    image: 'https://decure.in/cdn/shop/files/chi_haf_renata_curved_90_dfbd8fed-707e-4fde-a1e0-8a876839e7c5.jpg?v=1721391623&width=823',
    features: [
      '90cm width, 1400 m³/hr suction power',
      'Intelligent Heat Auto Clean with 30 hr timer',
      'European design',
      '2-year warranty'
    ]
  },
  { 
    id: 9, 
    name: 'Crompton Hob SensoSafe Plus 80 Cm 4 Burner', 
    brand: 'Crompton',
    type: 'Gas stove',
    price: 36000, 
    image: 'https://www.crompton.co.in/cdn/shop/files/SensoSafeplus80cm4BrPL3.jpg?v=1743171857&width=1100',
    features: [
      'Premium mat finish body',
      '3D Brass Burners',
      'Superior Aesthetics',
      '2-year warranty'
    ]
  },
  { 
    id: 10, 
    name: 'Glen 60cm Auto Clean Chimney', 
    brand: 'Glen',
    type: 'Kitchen Chimney',
    price: 12999, 
    image: 'https://glenindia.com/cdn/shop/files/1_b19848cb-8512-4162-92ff-a6e6638542a3_1400x1400.jpg?v=1712896874',
    features: [
      '60cm width, 1200 m³/hr suction power',
      'Auto clean function',
      'Touch control panel',
      '2-year warranty'
    ]
  },
  { 
    id: 11, 
    name: 'Hafele 4 Burner Gas Stove', 
    brand: 'Hafele',
    type: 'Gas Stove',
    price: 63000, 
    image: 'https://decure.in/cdn/shop/files/hob_haf_altius_plus_matt_glass_490_355cef74-4f2d-427e-b891-fc6cdffaae1d.jpg?v=1735555604&width=823',
    features: [
      '4 brass burners with auto ignition',
      'Premium mat finish body',
      'European design',
      '2-year warranty'
    ]
  },
  { 
    id: 12, 
    name: 'Crompton 60cm Kitchen Chimney ', 
    brand: 'Crompton',
    type: 'Kitchen Chimney',
    price: 26000, 
    image: 'https://www.crompton.co.in/cdn/shop/files/sensosmart-curv-baff-60-png.png?v=1728473934&width=1100',
    features: [
      '60cm width, 1416 m³/hr suction power',
      'Intelligent Heat Auto Clean with 30 hr timer',
      'Noise Level 50 dB',
      '1-year warranty'
    ]
  }
];
  // Initialize cart and user data
  let cart = [];
  let isLoginMode = true;
  let currentUser = null;
  let ordersPlaced = 0;
  let activeBrandFilter = 'all';

  // Function to render products
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    let filteredProducts = products;
    if (activeBrandFilter !== 'all') {
      filteredProducts = products.filter(product => product.brand.toLowerCase() === activeBrandFilter);
    }
    
    filteredProducts.forEach(product => {
      const productItem = document.createElement('div');
      productItem.className = 'product-item';
      
      let featuresHTML = '';
      if (product.features && product.features.length > 0) {
        featuresHTML = '<div class="features"><ul>';
        product.features.forEach(feature => {
          featuresHTML += `<li>${feature}</li>`;
        });
        featuresHTML += '</ul></div>';
      }
      
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="brand">${product.brand}</div>
        <h3>${product.name}</h3>
        ${featuresHTML}
        <p>₹${product.price.toLocaleString('en-IN')}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productItem);
    });
  }

  // Function to render products on the home page
  function renderHomeProducts() {
    const homeProductList = document.getElementById('home-product-list');
    homeProductList.innerHTML = '';
    
    // Show only 6 featured products on home page
    const featuredProducts = products.slice(0, 6);
    
    featuredProducts.forEach(product => {
      const productItem = document.createElement('div');
      productItem.className = 'product-item';
      
      let featuresHTML = '';
      if (product.features && product.features.length > 0) {
        featuresHTML = '<div class="features"><ul>';
        // Show only first 2 features on home page
        product.features.slice(0, 2).forEach(feature => {
          featuresHTML += `<li>${feature}</li>`;
        });
        featuresHTML += '</ul></div>';
      }
      
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="brand">${product.brand}</div>
        <h3>${product.name}</h3>
        ${featuresHTML}
        <p>₹${product.price.toLocaleString('en-IN')}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      homeProductList.appendChild(productItem);
    });
  }

  // Function to filter products by brand
  function filterProducts(brand) {
    activeBrandFilter = brand;
    
    // Update active button styling
    document.querySelectorAll('.brand-filter button').forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts();
  }

  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
    alert(`${product.name} added to cart!`);
  }

  // Function to remove product from cart
  function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }

  // Function to update cart display
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">₹${item.price.toLocaleString('en-IN')}</span>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });

    cartTotal.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
  }

  // Function for checkout
  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      if (!currentUser) {
        alert('Please login to proceed with checkout.');
        showSection('auth');
      } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const productList = cart.map(item => item.name);
  
        fetch('http://localhost:3000/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: currentUser,
            products: productList,
            total: total
          })
        })
        .then(response => {
          if (response.ok) {
            alert(`Order placed successfully!\nTotal: ₹${total.toLocaleString('en-IN')}`);
            ordersPlaced++;
            document.getElementById('order-count').textContent = ordersPlaced;
            cart = [];
            updateCart();
          } else {
            alert('Failed to place order.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Server error.');
        });
      }
    }
  }
  
  
  

  // Search functionality
  function searchProduct() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.brand.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query)
    );
    renderFilteredProducts(filteredProducts);
  }

  function renderFilteredProducts(filteredProducts) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      searchResults.innerHTML = '<p>No products found matching your search.</p>';
      return;
    }
    
    filteredProducts.forEach(product => {
      const productItem = document.createElement('div');
      productItem.className = 'product-item';
      
      let featuresHTML = '';
      if (product.features && product.features.length > 0) {
        featuresHTML = '<div class="features"><ul>';
        product.features.slice(0, 2).forEach(feature => {
          featuresHTML += `<li>${feature}</li>`;
        });
        featuresHTML += '</ul></div>';
      }
      
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="brand">${product.brand}</div>
        <h3>${product.name}</h3>
        ${featuresHTML}
        <p>₹${product.price.toLocaleString('en-IN')}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      searchResults.appendChild(productItem);
    });
  }

  // Function to switch between sections
  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('show'));
    document.getElementById(sectionId).classList.add('show');
    hideProfile();
    
    // Reset search results when showing home section
    if (sectionId === 'home') {
      document.getElementById('search-results').innerHTML = '';
      document.getElementById('search-input').value = '';
    }
  }

  // Function to show profile
  function showProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.style.display = profileSection.style.display === 'block' ? 'none' : 'block';
  }

  // Unified login/sign-in function
  function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;

    if (isLoginMode) {
      // Simple login validation
      if (email && password) {
        currentUser = email;
        document.getElementById('profile-email').textContent = email;
        document.getElementById('account-type').textContent = 'Registered Customer';
        alert(`Welcome back! You are now logged in as ${email}`);
        showSection('home');
      } else {
        alert('Please enter both email and password.');
      }
    } else {
      // Registration
      if (email && password) {
        currentUser = email;
        document.getElementById('profile-email').textContent = email;
        document.getElementById('account-type').textContent = 'Registered Customer';
        alert(`Thank you for registering! You are now logged in as ${email}`);
        showSection('home');
      } else {
        alert('Please complete all registration fields.');
      }
    }
    
    document.getElementById('auth-form').reset();
  }

  // Toggle between login and sign-in
  function toggleAuth() {
    isLoginMode = !isLoginMode;
    const title = document.getElementById('auth-title');
    const button = document.getElementById('auth-button');
    const toggleLink = document.querySelector('.toggle-link');

    if (isLoginMode) {
      title.textContent = 'Login';
      button.textContent = 'Login';
      toggleLink.textContent = "Don't have an account? Register";
    } else {
      title.textContent = 'Register';
      button.textContent = 'Register';
      toggleLink.textContent = 'Already have an account? Login';
    }
    
    document.getElementById('auth-form').reset();
  }

  // Logout function
  function logout() {
    currentUser = null;
    document.getElementById('profile-email').textContent = 'guest@example.com';
    document.getElementById('account-type').textContent = 'Guest';
    alert('You have been logged out.');
    showSection('auth');
    hideProfile();
  }

  // Hide profile section
  function hideProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.style.display = 'none';
  }

  // Handle selling a product
  function handleSell(event) {
    event.preventDefault();
    const name = document.getElementById('sell-name').value;
    const brand = document.getElementById('sell-brand').value;
    const type = document.getElementById('sell-type').value;
    const price = parseFloat(document.getElementById('sell-price').value);
    const image = document.getElementById('sell-image').value;
    const desc = document.getElementById('sell-desc').value;

    // Extract features from description (simple approach)
    const features = desc.split('\n').filter(line => line.trim() !== '');

    const newProduct = {
      id: products.length + 1,
      name: name,
      brand: brand,
      type: type,
      price: price,
      image: image,
      features: features
    };

    products.push(newProduct);
    renderProducts();
    renderHomeProducts();
    alert(`Product "${name}" added successfully!`);
    document.getElementById('sell-form').reset();
  }

  // Initialize the page
  renderProducts();
  renderHomeProducts();
  showSection('home');