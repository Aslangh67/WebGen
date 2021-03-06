var db = require("../models");

db.Privilege.bulkCreate(
    [{
        priv_name: "Owner",
        manage_user: true,
        design_web: true,
        manage_menu: true,
        view_print_menu: true,
        setup_reservation: true,
        view_reservation: true
    },
    {
        priv_name: "Web Design",
        manage_user: false,
        design_web: true,
        manage_menu: false,
        view_print_menu: false,
        setup_reservation: false,
        view_reservation: false
    },
    {
        priv_name: "Chef",
        manage_user: false,
        design_web: false,
        manage_menu: true,
        view_print_menu: true,
        setup_reservation: false,
        view_reservation: false
    },
    {
        priv_name: "Hostess",
        manage_user: false,
        design_web: false,
        manage_menu: false,
        view_print_menu: true,
        setup_reservation: true,
        view_reservation: true
    }],
).then(function (dbPrivilege) {
    console.log(dbPrivilege);


    db.Role.bulkCreate(
       [ {
            role_name: "Owner",
            PrivilegeId: 1
        },
        {
            role_name: "Web",
            PrivilegeId: 2
        },
        {
            role_name: "Chef",
            PrivilegeId: 3
        },
        {
            role_name: "Hostess",
            PrivilegeId: 4
        }]
    ).then(function (dbRole) {
        console.log(dbRole);
    });
})

db.Menu_category.bulkCreate([
    { category_name: "None"},
    { category_name: "Breakfast"},
    { category_name: "Lunch"},
    { category_name: "Dinner"},
    { category_name: "Specials"},
    { category_name: "Happy Hour"}
]).then(function (dbPrivilege) {
    console.log(dbPrivilege);

});

db.Menu_sub_category.bulkCreate([
    { sub_category_name: "Appetizer", sort: 1},
    { sub_category_name: "Eggs", sort: 1},
    { sub_category_name: "Pancakes & Waffles", sort:2},
    { sub_category_name: "Burgers", sort: 4},
    { sub_category_name: "Sandwiches", sort: 3},
    { sub_category_name: "Entrees", sort: 5},
    { sub_category_name: "Beverages", sort: 99},
    { sub_category_name: "Meat & Poultry", sort: 9},
    { sub_category_name: "Pasta", sort: 7},
    { sub_category_name: "Seafood", sort: 8},
    { sub_category_name: "Vegetables", sort: 6},
    { sub_category_name: "Desserts", sort: 30},
    { sub_category_name: "Specials",sort:25},
    { sub_category_name: "Soup & Salad", sort: 2}
])

.then(function (dbPrivilege) {
    console.log(dbPrivilege);

});

db.Area.bulkCreate([ 
    {area_name: "Dining Room"},
    {area_name: "Lounge"},
    {area_name: "Patio"},
]).then(function (dbArea) {
    console.log(dbArea);
});
