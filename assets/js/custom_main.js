/*<-- start ======= Header ======= -->*/
var logoHref = './index.html'
var logoSrc = './assets/img/logo.png'

var loginText = 'Login'

// Create the button element with the stored text
var getStartedButtonHTML =
  '<a class="btn-getstarted" href="#">' + loginText + '</a>'

// Get the container where you want to set the inner HTML
var buttonContainer = document.getElementById('buttonContainer')

// Set the inner HTML of the container
// buttonContainer.innerHTML = getStartedButtonHTML;
var defaultEnableValue = true
var defaultVisibleValue = true

var menuItems = [
  {
    icon: 'fa fa-eye',
    MenuName: 'Home',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#hero',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'About',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#about',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Services',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#services',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Portfolio',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#portfolio',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Clients',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#clients',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Testimonial',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#testimonials',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Career',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#career',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Contact',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#contact',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  // Add more menu items as needed
]

var menuList = document.getElementById('menuList')

function createMenuItem(item) {
  var menuItem = document.createElement('li')
  var menuLink = document.createElement('a')

  menuLink.setAttribute('href', item.PlanOfAction)
  menuLink.textContent = item.MenuName

  if (item.MoreMenu && item.MoreMenu.length > 0) {
    var dropdown = createSubmenu(item.MoreMenu)
    menuItem.classList.add('dropdown')
    menuItem.appendChild(dropdown)

    var chevronDownIcon = document.createElement('i')
    chevronDownIcon.classList.add('bi', 'bi-chevron-down')
    menuLink.appendChild(chevronDownIcon)
  }

  menuLink.addEventListener('click', function (event) {
    document.querySelectorAll('#menuList a').forEach(function (link) {
      link.classList.remove('active')
    })

    this.classList.add('active')
  })

  menuItem.appendChild(menuLink)
  if (item.MenuName === 'Home') {
    menuItem.classList.add('active')
  }
  return menuItem
}

function createSubmenu(submenuItems) {
  var submenu = document.createElement('ul')
  submenu.classList.add('dropdown-menu')

  for (var i = 0; i < submenuItems.length; i++) {
    var submenuItem = createMenuItem(submenuItems[i])
    submenu.appendChild(submenuItem)
  }

  return submenu
}

function generateMenu(menuData, parentElement) {
  for (var i = 0; i < menuData.length; i++) {
    var menuItem = createMenuItem(menuData[i])
    parentElement.appendChild(menuItem)

    if (menuData[i].MoreMenu && menuData[i].MoreMenu.length > 0) {
      var submenu = createSubmenu(menuData[i].MoreMenu)
      menuItem.appendChild(submenu)
    }
  }
}

generateMenu(menuItems, menuList)

// Create logo element dynamically
var logoLink = document.createElement('a')
logoLink.href = logoHref
logoLink.className = 'logo d-flex align-items-center me-auto me-xl-0'
logoLink.style.height = '20px'
var logoImg = document.createElement('img')
logoImg.src = logoSrc
logoImg.style.marginLeft = '20px'
logoImg.style.filter = 'invert(1)'

logoImg.alt = ''
logoLink.appendChild(logoImg)

// Append logo to the container
document
  .getElementById('headerContainer')
  .insertBefore(logoLink, document.getElementById('headerContainer').firstChild)
/*<-- end ======= Header ======= -->*/

/*<-- start ======= About Us ======= -->*/
var aboutUsData = {
  TitleName: 'About Us',
  SubtitleName: 'Who we Are:',
  PlanOfAction: '#contact',
  aboutUsDescription:
    'R1Xchange is a leading banking finance and technology company with more than 10 years of experience in the Banking Lending Business.',
  additionalInfo:
    'Additionally, pre underwrite your financial and tax documents and enable you to get access to the right set of lenders offering you the cheapest and easiest credit solutions to suit all your personal and business requirements.',
  iconBoxes: [
    {
      iconClass: 'bi bi-cash-coin',
      title: 'How we matter?',
      description:
        'Here at R1Xchange we want to make sure that all key business loan offerings and working capital products from across banks are available under a single roof with a click of a button, so that you can focus on the most important aspect of running your business while we help you manage your banking financials.',
    },
    {
      iconClass: 'bi bi-person-lines-fill',
      title: 'Mission Statement',
      description:
        'Our mission is to empower businesses with seamless access to financial opportunities through innovative lending solutions. We are committed to leveraging technology to simplify the borrowing process, foster financial inclusion, and drive economic growth by providing accessible and transparent lending services.<br>',
    },
    {
      iconClass: 'bi bi-briefcase',
      title: 'Our Offerings',
      description:
        'You can choose from our whole host of financial and banking products to suit your business ranging from supply chain finance, overdraft lines, business term loans, inventory finance and revenue based funding.<br><br><br><br>',
    },
    {
      iconClass: 'bi bi-command',
      title: 'Vision and Values',
      description:
        "We are driven towards empowering India's financial landscape through innovative technology, financial inclusion and seamless financial solutions. We strive to revolutionize the way businesses manage, access, and grow their finances, fostering overall financial progress and ensuring financial well-being for all.",
    },
  ],
}

// Function to set dynamic content for the about us section
function setAboutUsContent(data) {
  document.getElementById('aboutUsTitle').innerHTML = data.TitleName
  document.getElementById('aboutUsSubtitle').innerHTML = data.SubtitleName
  document.getElementById('aboutUsDescription').innerHTML =
    data.aboutUsDescription
  document.getElementById('additionalInfo').innerHTML = data.additionalInfo
  var readMoreLink = document.getElementById('readMoreLink')
  readMoreLink.href = data.PlanOfAction

  var iconBoxesContainer = document.getElementById('iconBoxesContainer')

  data.iconBoxes.forEach(function (box) {
    var iconBox = document.createElement('div')
    iconBox.className = 'col-md-6'
    iconBox.setAttribute('data-aos', 'fade-up')
    iconBox.setAttribute('data-aos-delay', box.delay || '200') // Set a default delay if not provided

    var boxContent = `
        <div class="icon-box">
          <i class="${box.iconClass}"></i>
          <h3>${box.title}</h3>
          <p>${box.description}</p>
        </div>
      `

    iconBox.innerHTML = boxContent
    iconBoxesContainer.appendChild(iconBox)
  })
}

// Call the function with the provided data
setAboutUsContent(aboutUsData)
/*<-- end ======= About Us ======= -->*/

/*<-- start ======= Stats Section ======= -->*/
var statsData = {
  TitleName: 'How are we Unique?',
  SubtitleName: 'Our Moat',
  Description:
    'R1Xchange is a leading banking finance and technology company that will pre underwrite your financial and tax documents and enable you to get access to the right set of lenders offering you the cheapest and easiest credit solutions to suit all your personal and business requirements, we have a whole host of financial and banking products to suit every single business ranging from supply chain finance, overdraft lines, business term loans, inventory finance and revenue based funding.',
  BackgroundImage: './assets/img/stats-bg.jpg',
  ListItems: [
    'Deep banking expertise & Financial guidance',
    'Multiple Banks and Lenders',
    'Credit assessment & Fitment',
    'Sanctions & Approvals',
    'End to End Support from Loan Request To Loan Disbursal',
  ],
  StatsItems: [
    {
      label: 'Distributors',
      value: 7532,
    },
    {
      label: 'Retailers',
      value: 40846,
    },
    {
      label: 'Anchors',
      value: 30,
    },
  ],
}

// Function to set dynamic content for the stats section
function setStatsContent(data) {
  var statsBackground = document.getElementById('statsBackground')
  statsBackground.src = data.BackgroundImage

  document.getElementById('statsTitle').innerHTML = data.TitleName
  document.getElementById('statsSubtitle').innerHTML = data.SubtitleName
  document.getElementById('statsDescription').innerHTML = data.Description

  // Set list items
  var statsList = document.getElementById('statsList')
  data.ListItems.forEach(function (item) {
    var listItem = document.createElement('li')
    listItem.style.fontWeight = '700'
    listItem.textContent = item
    statsList.appendChild(listItem)
  })

  // Set stats items
  var statsItemsContainer = document.getElementById('statsItemsContainer')
  data.StatsItems.forEach(function (item) {
    var statsItem = document.createElement('div')
    statsItem.className = 'col-lg-4 col-md-6'
    statsItem.innerHTML = `
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="${item.value}" data-purecounter-duration="1" class="purecounter"></span>
          <p>${item.label}</p>
        </div>
      `
    statsItemsContainer.appendChild(statsItem)
  })
}

// Call the function with the provided data
setStatsContent(statsData)
/*<-- end ======= Stats Section ======= -->*/

/*<-- start ======= Service Section ======= -->*/
var sectionInfo = {
  TitleName: 'Services',
  SubtitleName: 'The Lending Triangle',
  Description:
    'We have it all covered secured loans, unsecured Loans and Supply Chain Finance, we call it the business triangle. Our offerings include over 140 products under these categories to make sure we cover every business need.',
}

var servicesData = [
  {
    title: 'Secured Loans',
    content:
      'Our key product offerings include Mortgage Loans and Home loans, we also offer Overdrafts for Businesses against the property mortgaged.',
    image: './assets/img/services-features/SECURE_LOAN_COUPLE_UNDRSTNG.jpg',
    order: 'contentFirst',
    icon: 'bi bi-briefcase',
  },
  {
    title: 'Unsecured Business Loans',
    content:
      'To help manage businesses cover cash flow fluctuations, timely payments and other short term obligations we offer unsecured Overdraft facilities and Term Loans at attractive rates with simple and easy terms.',
    image:
      './assets/img/services-features/UNSECURED_BIZZLOAN-2MEN_HANDSHAKE.jpg',
    order: 'imageFirst',
    icon: 'bi bi-card-checklist',
  },
  {
    title: 'Supply Chain Finance',
    content:
      'An incredibly powerful method to ease cash flow issues within the business, reduce risk of bad debts and improve the overall sales and performance of the entity.',
    image: './assets/img/services-features/SUPPLY_CHAINFINANCE_PHOTO2.jpg',
    order: 'contentFirst',
    icon: 'bi bi-bar-chart',
  },
  {
    title: 'Working Capital Loan',
    content:
      "Working capital loans help businesses manage their day-to-day operations by providing them with the necessary funds to cover their short-term operations expenses, such as purchasing inventory, managing accounts payable, and meeting other operational costs.<br><br> Businesses can avail various types of working capital loans, such as cash credit, overdraft facility,trade credit, working capital term loans, and bank guarantees. Banks and Lenders provide working capital loans based on factors such as the business's creditworthiness, financial stability, repayment capacity, business plan, and collateral. <br><br>At R1Xchange, we help structure your various working capital needs with the right offering of financing solutions from whole host of lenders post careful understanding and analysis of your business.",
    image:
      './assets/img/services-features/WORKING_CAPITAL_LOAN_FACTORY_WORKERS.jpeg',
    order: 'imageFirst',
    icon: 'bi bi-award',
  },
  {
    title: 'MSME Loan',
    content:
      'To support the Micro, Small, and Medium Enterprises (MSME) sector, Govt. actively promotes and provides financial support through various initiatives and schemes aimed at providing financial assistance and support. <br><br>The government periodically announces interest subvention schemes to provide financial support MSMEs by offering interest subsidies on loans, thus reducing the overall cost of borrowing for the enterprises.<br><br>Here at R1Xchange, we work with various agencies and Lenders to help you avail the schemes and benefits aimed at enabling MSMEs and businesses to get access to easy and affordable credit.',
    image: './assets/img/services-features/MSME_SAMPLE_TAILOR_DRESSMACHINE.jpg',
    order: 'contentFirst',
    icon: 'bi bi-aspect-ratio',
  },
  // Add more service data objects as needed
]

function createServiceItem(title, content, image, order, icon) {
  var container = document.createElement('div')
  container.className = 'container'
  container.style.marginBottom = '20px'
  container.style.marginTop = '30px'

  var serviceItem = document.createElement('div')
  serviceItem.className = 'row gy-4 aos-init aos-animate service-item d-flex'
  serviceItem.setAttribute('data-aos', 'fade-up')

  var itemContent

  if (order === 'imageFirst') {
    itemContent = `
            <div class="col-lg-6" style="display: flex; justify-content: center; align-items: center;">
                <img src="${image}" alt="" srcset="" style="height: 300px;">
            </div>
            <div class="col-lg-6">
                <div class="">
                    <div class="icon flex-shrink-0"><i class="${icon}"></i></div><br><br>
                    <div>
                        <h4 class="title"><span class="stretched-link">${title}</span></h4>
                        <p>${content}</p>
                    </div>
                </div>
            </div>
        `
  } else if (order === 'contentFirst') {
    itemContent = `
            <div class="col-lg-6">
                <div class="">
                    <div class="icon flex-shrink-0"><i class="${icon}"></i></div><br><br>
                    <div>
                        <h4 class="title"><span class="stretched-link">${title}</span></h4>
                        <p>${content}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" style="display: flex; justify-content: center; align-items: center;">
                <img src="${image}" alt="" srcset="" style="height: 300px;">
            </div>
        `
  }

  serviceItem.innerHTML = itemContent
  container.appendChild(serviceItem)

  return container
}

// Example usage
var servicesContainer = document.getElementById('services')

// Add section title and description
var sectionTitle = document.createElement('div')
sectionTitle.className = 'container section-title aos-init aos-animate'
sectionTitle.setAttribute('data-aos', 'fade-up')
sectionTitle.innerHTML = `
    <h2>${sectionInfo.TitleName}</h2>
    <h3>${sectionInfo.SubtitleName}</h3>
    <p style="text-align: justify;">${sectionInfo.Description}</p>
`
servicesContainer.appendChild(sectionTitle)

// Add service items
servicesData.forEach(function (service) {
  var serviceItem = createServiceItem(
    service.title,
    service.content,
    service.image,
    service.order,
    service.icon
  )
  servicesContainer.appendChild(serviceItem)
})
/*<-- end ======= Service Section ======= -->*/

/*<-- start ======= Feature Section ======= -->*/
var featuresInfo = {
  TitleName: 'TYPES OF LOAN PRODUCTS',
  SubtitleName: 'All of Banking under a single roof',
  Description:
    'Here at R1Xchange we enable you to get access to the right set of lenders offering you the cheapest and easiest credit solutions to suit all your personal and business requirements, we have a whole host of financial and banking products to suit every single business ranging from supply chain finance, overdraft lines, business term loans, inventory finance and revenue based funding, everything under one single roof',
}

var featuresData = [
  {
    order: 'contentFirst',
    title: 'Home Loans',
    subtitle: 'Secured HL',
    content:
      "Housing loans, also known as home loans, are financial products offered by various banks and financial institutions to help individuals purchase or construct a house. The terms and conditions, as well as the interest rates, for housing loans can vary depending on the financial institution and the current market conditions. Some factors that may influence housing loan interest rates include the Reserve Bank of India's monetary policy, inflation rates, and the overall economic situation.<br><br>At R1Xchange, we understand that Building a home as said is a dream come true for many, we can help you build your dream home and also refinance it as working capital for your business at the most competitive rate of interest.",
    image: '',
    secondImage:
      './assets/img/services-features/HOME_LOAN_COUPLE_POSING PICC.jpg',
    buttonId: 'securedhl',
  },
  {
    order: 'imageFirst',
    title: 'Business Loans / B2B Lending',
    subtitle: 'Unsecured BL',
    content:
      "Unsecured Business Loan is a loan given for business purposes where the business does not have to pledge any collateral or security to the Lender in order to avail the loan. Repayment of the loan can be done through Equated Monthly Installments or EMIs as is commonly known.<br><br>We ,at R1Xchange, adopt a thorough evaluation process taking into account various factors to ensure that the loan meets the company's needs and is sustainable. Essentially, we identify the purpose of the loan and work towards determining the loan amount post evaluating the creditworthiness through a close review of various data points",
    image: './assets/img/services-features/B2B_LENDING_BIZZ_LOAN.jpg',
    secondImage: 'assets/img/second-image.jpg',
    buttonId: 'unsecuredhl',
  },
  {
    order: 'contentFirst',
    title: 'AutoMobile Loan',
    subtitle: 'Vehicle Loan',
    content:
      "Automobile loans are a type of secured loan specifically designed to help individuals purchase vehicles. Also known as auto loans or car loans, these loans typically provide borrowers with the necessary funds to buy a car or 4 wheeler, and the vehicle itself serves as collateral for the loan. The terms and conditions, including the interest rates, repayment schedules, and loan amounts, can vary depending on the lender and the borrower's creditworthiness.<br><br>At R1Xchange, we work with you to understand various factors to ensure that the automobile financing aligns with the company's needs and also ensures in enhancing financial capabilities to bring in efficient service and foster growth. In addition to this , we compare interest rate and loan terms to find the best lender available in your region to ensure convenience and positive business impact.",
    image: '',
    secondImage:
      './assets/img/services-features/AUTOMOBILE_LOAN_CHILD_CAR1.jpg',
    buttonId: 'vehicleloan',
  },
  {
    order: 'imageFirst',
    title: 'Supply Chain Finance',
    subtitle: '',
    content:
      "Supply chain finance, also known as supplier finance or reverse factoring, is a set of solutions that optimizes cash flow by allowing businesses to lengthen their payment terms to their suppliers while  providing the option for their large and SME suppliers to get paid early.<br><br>In recent years, the Indian government has taken initiatives to promote supply chain finance, recognizing its potential to strengthen the country's manufacturing and supply chain capabilities.<br><br>At R1Xchange, we allow companies to strengthen their supply chain and supply distribution by providing liquidity to their suppliers, at a lower cost of capital, based on their credit rating. By enabling businesses to access finance at lower interest rates and providing an avenue for small and medium-sized enterprises (SMEs) we help improve their cash flow and plan their financial resource allocation efficiently. With the digitization of financial services and our large network of Lenders , we offer our clients a diverse set of solutions at the best and competitive rates to enhance and grow their business finance.",
    image: './assets/img/services-features/SUPPLY_CHAINMEN_SHADOW.jpg',
    buttonId: 'supplychain',
  },
  {
    order: 'contentFirst',
    title: 'Mudra Loan',
    subtitle: '',
    content:
      "Mudra' stands for Micro Units Development and Refinance Agency. These loans were designed to aid the growth and development of small businesses in sectors such as trading, manufacturing, and services. Mudra Loans, an initiative by the Government of India, were introduced to provide financial support to small and micro enterprises.Here are some key features of Mudra Loans in India:<br> > Shishu: For businesses in the initial stages, offering loans up to ₹50,000.<br> > Kishore: For businesses that have expanded and require higher loan amounts, offering loans ranging from ₹50,000 to ₹5 lakhs.<br> > Tarun: For established businesses looking for further expansion, offering loans ranging from ₹5 lakhs to ₹10 lakhs.<br><br>At R1Xchange, we help businesses clearly understand the purpose of the MUDRA loan and how to avail the same through our network of lenders. Apart from counseling , our team of financial experts work with businesses to avail this govt. promoted scheme, whether it's for working capital, purchasing equipment, or any other business need, in aligning the loan with the company's goals.",
    secondImage: './assets/img/services-features/MUDRA_LOAN _LADY_MOBILE.jpg',
    buttonId: 'mudraloan',
  },
  {
    order: 'imageFirst',
    title: 'Loan Against Property',
    subtitle: '',
    content:
      'Loan Against Property (LAP) is a type of secured loan that allows individuals to borrow funds by leveraging their residential or commercial property as collateral. In India, various banks, non-banking financial companies (NBFCs), and financial institutions offer Loan Against Property with attractive interest rates and flexible repayment options. LAP is a great option for people who require a large amount of money but need more assets to pledge as collateral.<br><br>At R1Xchange, we advise borrowers not only on the benefits of using a LAP loan but we also help in assessing the market value of the property, since it would have a direct impact on the loan amount you can qualify for .We help individuals and businesses who require a large amount of money or looking for financial debt consolidation and have more assets to pledge as collateral',
    image: './assets/img/services-features/LOAN_AGNST PROPERTY_LOAN.jpg',
    buttonId: 'loanproperty',
  },
  {
    order: 'contentFirst',
    title: 'Credit Guarantee Fund Scheme for Micro and Small Enterprises',
    subtitle: 'CGTMSE',
    content:
      'This CGTMSE scheme is designed by govt. of India to provide collateral-free credit to micro and small enterprises upto 500 lakhs. At R1Xchange, we help both new and existing MSME units to avail loans without any collateral or secuity requirement under CGTMSE scheme through our large network of Lenders. ',
    secondImage:
      './assets/img/services-features/CGTMSE_LOAN _SURD_BIZZPHOTO.jpg ',
    buttonId: 'cgtmse',
  },
  {
    order: 'imageFirst',
    title: 'Overdraft',
    subtitle: '',
    content:
      'Overdraft facility for businesses is a financial service provided by banks that allows businesses to withdraw more money from their current account than they actually have in it ,up to a certain limit.This facility helps businesses to manage any unforeseen short term financial crises or cash flow gaps.<br><br>This facility is particularly useful for businesses that experience seasonal fluctuations in their cash flows or have occasional short-term funds requirements.<br><br>Our team of financial experts at R1Xchange helps businesses to manage any unforeseen short term financial crises or cash flow gaps through customized and regular overdraft facilities. We work with businesses to assess their eligibility in terms of their credit history , financial stability and other relevant factors so that they can leverage their overdraft facilities to the maximum amount possible. With our large network of banks and Lenders across India , we provide businesses the facility to explore multiple funding options and leverage their business potential to maximize growth.',
    image: './assets/img/services-features/OVERDRAFT_LOAN.jpg',
    buttonId: 'overdraft',
  },
  {
    order: 'contentFirst',
    title: 'Term Loan',
    subtitle: '',
    content:
      'A term loan refers to a Bank loan for a specific amount that has a specified repayment schedule and a fixed or reducing rate of interest.<br><br>We at R1Xchange , help businesses who are looking for business expansion, meet capital expenditure, or other long-term financing needs with these loans. Apart from helping businesses get access to term loans we also help them in understanding and planning the repayment period for term loan which can vary, typically ranging from one to ten years or more, depending on the specific terms of the loan agreement. Our expertise and timely financial arrangements has helped many businesses get easy availability of term loans to facilitate their growth and expansion, especially small and medium-sized enterprises (SMEs). Additionally, with our network and platform of digital lending , our business customers are delighted with the easy availability of term loans, making the process more convenient and accessible.',
    secondImage: './assets/img/services-features/TERM_LOAN_BIZZ_INDIVDUAL.jpg',
    buttonId: 'termloan',
  },

  // Add more data for other types as needed
]

function createFeatureItem(
  order,
  title,
  subtitle,
  content,
  image,
  secondImage,
  buttonId
) {
  var container = document.createElement('div')
  container.className = 'container'

  var itemContent
  if (order === 'contentFirst') {
    itemContent = `
        
            <div id="${buttonId}" class="row gy-4 align-items-center features-item">
                <div class="col-lg-6 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <h3>${title}</h3>
                    <p>${subtitle}</p>
                    <p>${content}</p>
                    <a    href="#contact" class="btn btn-get-started">Know more</a>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
                    <div class="">
                       
                        <img src="${secondImage}" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <br>
            <br>
        `
  } else if (order === 'imageFirst') {
    itemContent = `
            <div id="${buttonId}" class="row gy-4 align-items-stretch justify-content-between features-item">
                <div class="col-lg-6 d-flex align-items-center features-img-bg aos-init aos-animate" data-aos="zoom-out">
                    <img src="${image}" class="img-fluid" alt="" style="object-fit:fill">
                </div>
                <div class="col-lg-5 d-flex justify-content-center flex-column aos-init aos-animate" data-aos="fade-up">
                    <h3 >${title}</h3>
                    <p>${subtitle}</p>
                    <p>${content}</p>
                    <a   href="#contact" class="btn btn-get-started align-self-start">know more</a>
                </div>
            </div>
            <br>
            <br>
        `
  }

  container.innerHTML = itemContent
  return container
}

// Example usage
var featuresContainer = document.getElementById('features')

// Add section title and description
var featuresTitle = document.createElement('div')
featuresTitle.className = 'container section-title'
featuresTitle.setAttribute('data-aos', 'fade-up')
featuresTitle.innerHTML = `
    <h2>${featuresInfo.TitleName}</h2>
    <h3>${featuresInfo.SubtitleName}</h3>
    <p style="text-align:justify;">${featuresInfo.Description}</p>
`
featuresContainer.appendChild(featuresTitle)

// Add feature items
featuresData.forEach(function (feature) {
  var featureItem = createFeatureItem(
    feature.order,
    feature.title,
    feature.subtitle,
    feature.content,
    feature.image,
    feature.secondImage,
    feature.buttonId
  )
  featuresContainer.appendChild(featureItem)
})
/*<-- end ======= Feature Section ======= -->*/

/*<-- start ======= Portfolio Section ======= -->*/
var portfolioData = [
  // Loans category
  {
    category: 'loans',
    items: [
      {
        title: 'Supply Chain Finance',
        description:
          'We offer the most affordable and best Supply Chain Finance funding solution for your business where you can get security and collateral-free loan up to 90 days and make easy repayments.',
      },
      {
        title: 'MSME Loans',
        description:
          'This MSME Loan scheme is designed to provide collateral-free credit to micro and small enterprises. Under this scheme, both new and existing MSME units can avail loans up to a certain limit without any collateral or security requirement.',
      },
      {
        title: 'Business Line of Credit',
        description:
          'Overdraft and similar credit facility allows borrowers to draw funds as needed up to a predefined credit limit. Interest is only charged on the amount borrowed, making it a flexible solution for managing fluctuating cash flow.',
      },
      {
        title: 'Working Capital Loans',
        description:
          'Unsecured working capital loans are specifically designed to cover short-term working capital needs, such as inventory purchase, payroll, or other operational expenses.',
      },
      {
        title: 'Invoice Financing',
        description:
          'Invoice financing, or invoice factoring, allows businesses to receive advances on their outstanding invoices. This type of financing is ideal for businesses that experience delays in receiving payments from customers.',
      },
      {
        title: 'Merchant Cash Advances',
        description:
          'Merchant cash advances provide businesses with a lump sum amount in exchange for a percentage of daily credit card sales. Repayments are linked to daily sales, making it suitable for businesses with fluctuating revenue.',
      },
      {
        title: 'Business Term Loans',
        description:
          'This loan provides a lump sum amount for a fixed term to serve various purposes, such as expanding operations, purchasing equipment, or managing short-term cash flow gaps.',
      },
      // Add more loan items as needed
    ],
  },

  // Insurance category
  {
    category: 'insurance',
    items: [
      {
        title: 'Life Insurance',
        description:
          'LOOKING FOR A Term insurance or a whole life insurance protection, we have it all and that too from different insurance providers.',
      },
      {
        title: 'Health Insurance',
        description:
          'Cover your expenses on medical treatment incurred due to any illness or medical emergency through our whole range of health insurance policies.',
      },
      {
        title: 'Motor Insurance',
        description:
          'It is mandatory in India to have motor insurance policy for all vehicles operating in public space.',
      },
      {
        title: 'MSME Insurance',
        description:
          'To support and protect Micro, Small, and Medium Enterprises (MSMEs), various insurance products and schemes have been introduced to provide comprehensive coverage for the specific needs and risks faced by these small and medium-sized businesses.',
      },
      {
        title: 'Commercial Vehicle Insurance',
        description:
          'Commercial vehicle insurance in India provides coverage for vehicles used for commercial purposes. It provides financial protection against various risks and liabilities associated with commercial vehicle operations.',
      },
      // Add more insurance items as needed
    ],
  },

  // Investment category
  {
    category: 'investment',
    items: [
      {
        title: 'MoneyBack Schemes',
        description:
          'Money-back policy in India is a type of life insurance policy that provides periodic payments during the term of the policy, apart from the maturity benefit. This policy combines insurance and investment, offering both protection and periodic returns.',
      },
      {
        title: 'Guarantee Income Schemes',
        description:
          'Guaranteed income plans are a type of life insurance product that combine insurance protection and guaranteed returns. These plans provide policyholders with regular income payouts during the policy term or at maturity.',
      },
      {
        title: 'Pension & Retirement Plans',
        description:
          'Pension and retirement plans are designed to help individuals build a corpus for their post-retirement years. These plans offer a combination of savings and investment , providing regular income to support individuals during their retirement years.',
      },
      {
        title: 'Children Plans',
        description:
          "Looking to secure a child's future, including their education, marriage, and other important life milestones, choose from our wide range of children plans suited to your needs.",
      },
      // Add more investment items as needed
    ],
  },

  // Credit Card category
  {
    category: 'creditcard',
    items: [
      {
        title: 'Credit card',
        description:
          'Credit cards are widely used financial products that provide users with a convenient and secure way to make cashless payments. They offer a line of credit that allows cardholders, whether individuals or businessmen, to make purchases and pay for services, both online and offline, with the flexibility of repaying the amount later.',
      },
      {
        title: 'Business Credit card',
        description:
          'Business credit cards are designed and tailored to the needs of businesses. These cards typically come with features and benefits specifically designed for business expenses and transactions.',
      },
      // Add more credit card items as needed
    ],
  },

  // Balance Transfer category
  {
    category: 'balancetransfer',
    items: [
      {
        title: 'Balance Transfer',
        description:
          'Balance transfer facility on secured loans allows borrowers to transfer the outstanding balance of an existing loan from one financial institution to another, usually to benefit from lower interest rates, better terms, or improved services. This facility is commonly available for various secured loans, including home loans, loan against property, and other secured credit facilities.',
      },
      // Add more balance transfer items as needed
    ],
  },

  // Add more categories as needed
]

var TitleName = 'Portfolio' // Replace with your dynamic title
document.getElementById(
  'portfolioTitleContainer'
).innerHTML = `<h2>${TitleName}</h2>`

function generatePortfolioContent(data) {
  var portfolioContainer = document.querySelector('.isotope-container')
  var filtersContainer = document.querySelector('.portfolio-filters')

  // Iterate through the data and create portfolio items and filters
  for (var i = 0; i < data.length; i++) {
    var categoryData = data[i]
    var category = categoryData.category
    var items = categoryData.items

    // Create filter button
    var filterItem = document.createElement('li')
    filterItem.setAttribute('data-filter', '.filter-' + category)
    filterItem.textContent =
      category.charAt(0).toUpperCase() + category.slice(1)
    filtersContainer.appendChild(filterItem)

    // Iterate through items in the category
    for (var j = 0; j < items.length; j++) {
      var item = items[j]
      var portfolioItem = document.createElement('div')
      portfolioItem.className =
        'col-lg-4 col-md-6 portfolio-item isotope-item filter-' + category
      portfolioItem.innerHTML = `
        <div class="card">
          <div class="card-body">
            <div class="card-footer">
              <h4 class="text-center">${item.title}</h4>
            </div>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      `
      portfolioContainer.appendChild(portfolioItem)
    }
  }
}

// Call the function with the provided data
generatePortfolioContent(portfolioData)

/*<-- end ======= Portfolio Section ======= -->*/

/*<-- start ======= Career Section ======= -->*/
var careerSection = [
  {
    TitleName: 'Career',
    SubtitleName:
      'COME, JOIN R1Xchange TO LAUNCH THE SUCCESS STORY OF YOUR CAREER AND PROFESSIONAL GROWTH. Please email your resume at',
    EmailAddress: 'hr@r1xchange.com',
    PlanOfAction: 'https://zfrmz.com/3DDBhNq05jtGAveCO1Hm',
  },
]

document.getElementById(
  'careerTitleContainer'
).innerHTML = `<h2>${careerSection[0].TitleName}</h2>`
document.getElementById(
  'careerContentContainer'
).innerHTML = `<h3 style="color: white;">${careerSection[0].SubtitleName} <a href="${careerSection[0].PlanOfAction}">${careerSection[0].EmailAddress}</a></h3>`

/*<-- end ======= Career Section ======= -->*/

/*<-- start ======= FAQ Section ======= -->*/
var faqData = {
  faqSection: {
    TitleName: 'Frequently Asked',
    SubtitleName: 'Questions',
  },
  items: [
    {
      question:
        'What is a business loan and for what purpose can I use the loan?',
      answer:
        'A business loan is a financial product offered by banks or financial institutions that provides funds to businesses for various purposes, such as expansion, working capital, purchasing equipment, or meeting other financial requirements.',
    },
    {
      question:
        'I do not have any collateral or security, can I get a loan for business?',
      answer:
        "You can get a loan even if you do not have collateral. Eligibility criteria for a business loan typically involves factors such as the business's vintage, annual turnover, credit score, profitability, and the industry in which the business operates.",
    },
    {
      question: 'What all loans are available?',
      answer:
        'We offer both collateral and non-collateral based loans. Business Loans can range from short term loans like Supply Chain Finance, Working Capital loans, Overdraft facility to long term business loans, commercial vehicle finance, etc.',
    },
    {
      num: '4',
      question:
        'What documents are typically required to apply for a digital business loan?',
      answer:
        'Our Business loans involve minimal paperwork and easy documentation. However, some standard documents are usually required, including business financial statements, bank statements, tax returns, GST statements, business licenses, and KYC documents of the business owners.',
    },
    {
      num: '5',
      question:
        'What is the Rate of Interest on Loans and from which bank will I get loans?',
      answer:
        "Interest rate on business loan varies based on the Bank, lender, the business's credit profile, business location and the prevailing market conditions. We have tied up with 100+ lenders and multiple banks through whom we provide business loans based on the requirements.",
    },
    // Add more FAQ items as needed
  ],
}

// Update the FAQ title
document.getElementById(
  'faqTitleContainer'
).innerHTML = `<h3><span>${faqData.faqSection.TitleName}</span>
<strong>${faqData.faqSection.SubtitleName}</strong></h3>`

// Update the FAQ content
var faqContainer = document.getElementById('faqContentContainer')
for (var i = 0; i < faqData.items.length; i++) {
  var faqItem = faqData.items[i]
  var faqElement = document.createElement('div')
  faqElement.className = 'faq-item'
  faqElement.innerHTML = `
    <h3><span class="num">${i + 1}.</span> <span>${faqItem.question}</span></h3>
    <div class="faq-content">
      <p>Ans :- ${faqItem.answer}</p>
    </div>
    <i class="faq-toggle bi bi-chevron-right"></i>
  `
  faqContainer.appendChild(faqElement)
}

/*<-- end ======= FAQ Section ======= -->*/

/*<-- start ======= Call-to-Action Section ======= -->*/
var ctaData = {
  TitleName:
    'Your working capital and finance solution is right around the corner. Call us today !',
  SubtitleName: 'Call us, we will get back to you soon.',
  phoneNumber: '+91 9364111656',
  BackgroundImage: './assets/img/cta-bg.jpg',
}
var img = document.getElementById('callactionbg')
img.setAttribute('src', ctaData.BackgroundImage)
document.getElementById('ctaContentContainer').innerHTML = `
  <h3>${ctaData.TitleName}</h3>
  <p>${ctaData.SubtitleName}</p>
  <a class="cta-btn" href="tel:9364111656"> <span class="phone-icon">&#x1F4DE;</span>${ctaData.phoneNumber}</a>
`
/*<-- end ======= Call-to-Action Section ======= -->*/

/*<-- start ======= Testimonials  Section ======= -->*/

var testimonialsData = {
  testimonialsSection: {
    TitleName: 'Testimonials',
    SubtitleName: 'What our happiest customers have to say',
  },
  testimonials: [
    {
      name: 'Arshad Sheikh',
      designation: 'ZM ENTERPRISES. Nagpur',
      image: './assets/img/testimonials/testimonials-1.jpg',
      rating: 5,
      quote:
        'R1Xchange suggested me to apply for business loan through Kotak Bank, as they had the best deal for me. I am really happy with the deal amount and rate that I have got. If ever you want to apply for a business loan, do not rethink, just choose R1Xchange, they will get the best financing solution for you.',
    },
    {
      name: 'Babu K. Sebastian',
      designation: 'BABULAL ASSOCIATES, Ernakulam',
      image: './assets/img/testimonials/testimonials-2.jpg',
      rating: 5,
      quote:
        'R1Xchange representative have been very patient and helpful throughout my working capital loan request journey. Their personalized advice , streamlined documentation and user friendly approach has made the journey much more easier and convenient for businesses like me.',
    },
    {
      name: 'Kunal Gadi',
      designation: 'Om Marketing, Pune',
      image: 'assets/img/testimonials/testimonials-4.jpg',
      rating: 5,
      quote:
        'I had a few issues within my CIBIL, some wrong entries were mentioned in my report, I was not able to get a loan for more than 2 years with no luck from any of the several banks I tried with, through a friend I was introduced to the R1Xchange team, they assessed the documents so accurately, and were able to not only diagnose the issues but they were able to provide meaningful solutions in terms of the documents required to prove it was not my fault, through the whole process of applying till sanctions, I trust R1Xchange for all my banking and working capital requirements.',
    },
    {
      name: 'Suraj Bhalla',
      designation: 'SHAKTI TRADERS, Delhi',
      image: 'assets/img/testimonials/testimonials-3.jpg',
      rating: 5,
      quote:
        'I had an existing OD with my bank, when new opportunities came my way to expand, I realized  my existing banker had very limited exposure to the various new age products in banking and  how  I could structure my debt funding effectively, hence I wanted an effective solution from the best experts, thankfully I placed my trust with the R1Xchange team, they were so sound and helpful that I had more than what I had asked for in terms of options and funding to choose from multiple banks and Lenders.',
    },
    {
      name: 'Tilak B. Bhujade ',
      designation: 'SHANKAR PRASAD Enterprises, Nagpur',
      image: 'assets/img/testimonials/testimonials-5.jpg',
      rating: 5,
      quote:
        'I needed to raise around 30 lacks and by existing bank was not willing to support me on the entire requirement, I approached the R1Xchange team, within 2 days they assessed my documents and were able to precisely share with me the findings, I was surprised when they rolled out the offers from so many lenders many of whose names I had not even heard about, I find them as a one stop solution for all banking needs.',
    },
  ],
}

var testimonialInfoContainer = document.getElementById(
  'testimonialInfoContainer'
)
testimonialInfoContainer.innerHTML = `
  <h3>${testimonialsData.testimonialsSection.TitleName}</h3>
  <p>${testimonialsData.testimonialsSection.SubtitleName}</p>
`

var testimonialContainer = document.getElementById('testimonialContainer')

testimonialsData.testimonials.forEach(function (testimonial) {
  var testimonialItem = document.createElement('div')
  testimonialItem.className = 'swiper-slide'
  testimonialItem.innerHTML = `
    <div class="testimonial-item">
      <div class="d-flex">
        <img src="${
          testimonial.image
        }" class="testimonial-img flex-shrink-0" alt="">
        <div>
          <h3>${testimonial.name}</h3>
          <h4>${testimonial.designation}</h4>
          <div class="stars">${'<i class="bi bi-star-fill"></i>'.repeat(
            testimonial.rating
          )}</div>
        </div>
      </div>
      <p>
        <i class="bi bi-quote quote-icon-left"></i>
        <span>${testimonial.quote}</span>
        <i class="bi bi-quote quote-icon-right"></i>
      </p>
    </div>
  `
  testimonialContainer.appendChild(testimonialItem)
})
/*<-- end ======= Testimonials  Section ======= -->*/

/*<-- start ======= Contact  Section ======= -->*/
var contactSections = [
  {
    TitleName: 'Contact',
    SubtitleName: 'Let us know what you think, we love talking to you!!',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206418.7664957082!2d77.54951589308318!3d12.782921363146592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14494a8943f7%3A0x768d0f9874c48675!2sHosur%20Rd%2C%20Srinivasa%20Nagar%2C%20Hal%20Layout%2C%20Singasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701768661331!5m2!1sen!2sin',
    addressLine1:
      'Hosur Rd, Kudlu Gate, Srinivasa Nagar, Hal Layout, Singasandra,',
    addressLine2: 'Bengaluru, Karnataka-560068',
    phoneNumber: '+91 9364111656',
    emailAddress: 'support@r1xchange.com',
    contactus: 'For Queries related to our Products and Services, ',
    PlanOfAction: 'https://zfrmz.com/NUB9bXeP5vWH6Cx8MjSK',
    hoursLine1: 'Mon - Fri : 10:00 AM - 6:00 PM',
    hoursLine2: 'Sat - Sun : 10:00 AM - 3:00 PM',
  },
  // Add more objects as needed
]
var contactContainer = document.getElementById('contact')

contactSections.forEach(function (contactData) {
  var contactContent = document.createElement('div')
  contactContent.className = 'container'

  contactContent.innerHTML = `
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>${contactData.TitleName}</h2>
      <p>${contactData.SubtitleName}</p>
    </div>
    <!-- End Section Title -->

    <!-- Map -->
    <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
      <iframe style="border:0; width: 100%; height: 270px;"
        src="${contactData.mapSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" frameborder="0" allowfullscreen></iframe>
    </div>

    <!-- Contact Information -->
    <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4">
      <div class="col-lg-12">
        <div class="row gy-4">
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>${contactData.addressLine1}</p>
              <p>${contactData.addressLine2}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>${contactData.phoneNumber}</p>
              <br> <br>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>${contactData.emailAddress}</p>
              <br> <br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row gy-4">
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-person-lines-fill"></i>
              <h3>Contact Us</h3>
              <p>${contactData.contactus}<a href="${contactData.PlanOfAction}">Know More.</a></p>
              <br>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-clock"></i>
              <h3>Open Hours</h3>
              <p>${contactData.hoursLine1}</p>
              <p>${contactData.hoursLine2}</p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `

  contactContainer.appendChild(contactContent)
})

/*<-- end ======= Contact  Section ======= -->*/

/*<-- start ======= Footer  Section ======= -->*/
var footerData = {
  about: {
    logoSrc: './assets/img/logo.png',
    description:
      'We will manage the banking and finance for you, while you have more time to manage and run your business efficiently.',
  },
  links: {
    usefulLinks: [
      {
        TitleName: 'Home',
        PlanofAction: '#hero',
      },
      {
        TitleName: 'About us',
        PlanofAction: '#about',
      },
      {
        TitleName: 'Services',
        PlanofAction: '#services',
      },
      {
        TitleName: 'Terms of service',
        PlanofAction: 'assets/pdf/tc.pdf',
      },
      {
        TitleName: 'Privacy policy',
        PlanofAction: 'assets/pdf/pp.pdf',
      },
      // Add more links as needed
    ],
  },
  services: {
    ourServices: [
      {
        TitleName: 'Secured HL',
        PlanofAction: './index.html#securedhl',
      },
      {
        TitleName: 'Unsecured BL',
        PlanofAction: '#unsecuredhl',
      },
      {
        TitleName: 'Vehicle Loan',
        PlanofAction: '#vehicleloan',
      },
      {
        TitleName: 'Supply Chain Finance',
        PlanofAction: '#supplychain',
      },
      {
        TitleName: 'Mudra Loan',
        PlanofAction: '#mudraloan',
      },
      {
        TitleName: 'Loan against property',
        PlanofAction: '#loanproperty',
      },
      {
        TitleName: 'Term loan',
        PlanofAction: '#termloan',
      },
      // Add more services as needed
    ],
  },
  contact: {
    addressLines: [
      'Hosur Rd, Kudlu Gate, Srinivasa Nagar, Hal Layout, Singasandra,',
      'Bengaluru, Karnataka-560068',
    ],
    phone: '+91 9364111656',
    email: 'support@r1xchange.com',
  },
}
// Function to create a list of links
function createLinkList(links) {
  var list = document.createElement('ul')
  links.forEach(function (link) {
    var listItem = document.createElement('li')
    var anchor = document.createElement('a')
    anchor.href = link.PlanofAction
    anchor.textContent = link.TitleName

    // Check if the link is "Terms of service" or "Privacy policy" and open in a new tab
    if (
      link.TitleName === 'Terms of service' ||
      link.TitleName === 'Privacy policy'
    ) {
      anchor.target = '_blank'
    }

    listItem.appendChild(anchor)
    list.appendChild(listItem)
  })
  return list
}

// Populate the footer sections with dynamic content
document.getElementById('footerAbout').innerHTML = `
  <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0" style="max-height: 130px;">
    <img src="${footerData.about.logoSrc}" alt="">
  </a>
  <p>${footerData.about.description}</p>
`

document.getElementById('footerLinks').innerHTML = `
  <h4>Useful Links</h4>
`
document
  .getElementById('footerLinks')
  .appendChild(createLinkList(footerData.links.usefulLinks))

document.getElementById('footerServices').innerHTML = `
  <h4>Our Services</h4>
`
document
  .getElementById('footerServices')
  .appendChild(createLinkList(footerData.services.ourServices))

document.getElementById('footerContact').innerHTML = `
  <h4>Contact Us</h4>
  <p>${footerData.contact.addressLines[0]}</p>
  <p>${footerData.contact.addressLines[1]}</p>
  <p class="mt-4"><strong>Phone:</strong> <span>${footerData.contact.phone}</span></p>
  <p><strong>Email:</strong> <span>${footerData.contact.email}</span></p>
`

/*<-- end ======= Footer  Section ======= -->*/
