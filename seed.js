const { green, red } = require("chalk");
const { db } = require("./server/db");

const {Student, Campus} = require('./server/db')

const students = [{
  firstName: 'Joe',
  lastName: 'Owens',
  email: 'joeowens@email.com',
  imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
  gpa: 4.0
},
{
  firstName: 'Dan',
  lastName: 'Johnson',
  email: 'danjohnson@email.com',
  imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
  gpa: 3.2
},
{
  firstName: 'Rick',
  lastName: 'Duun',
  email: 'rickduun@email.com',
  imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
  gpa: 3.4
},
{
  firstName: 'Jack',
  lastName: 'Thompson',
  email: 'jackthompson@email.com',
  imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
  gpa: 3.8,
},
{
  firstName: 'Thomas',
  lastName: 'Bonds',
  email: 'thomasbonds@email.com',
  imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
  gpa: 3.7,
},
];

const campuses = [{
  name: 'Harvard University',
  imageUrl: 'https://i0.wp.com/foreverlostintravel.com/wp-content/uploads/2020/02/Harvard-buildings.jpg?fit=688%2C516&ssl=1',
  address: 'Cambridge, MA',
  description: 'You will come here and study every day. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  name: 'UCLA',
  imageUrl: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20198/5d72b4772cfac209ff04c634_Royce+Quad/Royce+Quad_hero.jpg',
  address: 'Los Angeles, CA',
  description: 'This place rocks! Party school! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  name: 'Duke University',
  imageUrl: 'https://frontiersinblog.files.wordpress.com/2020/02/26628043971_c8c3a4a770_k.jpg',
  address: 'Cambridge, MA',
  description: `Let's win some basketball tournaments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
},
{
  name: 'Yale University',
  imageUrl: 'https://i2.wp.com/www.opindia.com/wp-content/uploads/2020/08/shutterstock_517879ae.jpg?fit=1000%2C563&ssl=1',
  address: 'New Haven, CT',
  description: `Let's study some business. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
},
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    
    // await Promise.all(students.map(student => {
    //   return Student.create(student);
    // }));

    // await Promise.all(campuses.map(campus => {
    //   return Campus.create(campus);
    // }));

    const Joe = await Student.create({
      firstName: 'Joe',
      lastName: 'Owens',
      email: 'joeowens@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 4.0
    })

    const Harvard = await Campus.create({
      name: 'Harvard University',
      imageUrl: 'https://i0.wp.com/foreverlostintravel.com/wp-content/uploads/2020/02/Harvard-buildings.jpg?fit=688%2C516&ssl=1',
      address: 'Cambridge, MA',
      description: 'You will come here and study every day. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })

    await Joe.setCampus(Harvard)

    const Dan = await Student.create({
      firstName: 'Dan',
      lastName: 'Johnson',
      email: 'danjohnson@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.2
      })

    const UCLA = await Campus.create({
      name: 'UCLA',
      imageUrl: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20198/5d72b4772cfac209ff04c634_Royce+Quad/Royce+Quad_hero.jpg',
      address: 'Los Angeles, CA',
      description: 'This place rocks! Party school! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })

    await Dan.setCampus(UCLA)

    const Rick = await Student.create({
      firstName: 'Rick',
      lastName: 'Duun',
      email: 'rickduun@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.4
    },)

    const Duke = await Campus.create({
      name: 'Duke University',
      imageUrl: 'https://frontiersinblog.files.wordpress.com/2020/02/26628043971_c8c3a4a770_k.jpg',
      address: 'Cambridge, MA',
      description: `Let's win some basketball tournaments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    })

    await Rick.setCampus(Duke)

    const Jack = await Student.create({
      firstName: 'Jack',
      lastName: 'Thompson',
      email: 'jackthompson@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })
    await Jack.setCampus(Duke)
    
    const Thomas = await Student.create({
      firstName: 'Thomas',
      lastName: 'Bonds',
      email: 'thomasbonds@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.7,
    })

    const Yale = await Campus.create({
      name: 'Yale University',
      imageUrl: 'https://i2.wp.com/www.opindia.com/wp-content/uploads/2020/08/shutterstock_517879ae.jpg?fit=1000%2C563&ssl=1',
      address: 'New Haven, CT',
      description: `Let's study some business. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    })

    // const Joey = await Student.create({
    //   firstName: 'Joey',
    //   lastName: 'Richards',
    //   email: 'joeyrichards@email.com',
    //   imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
    //   gpa: 3.3
    // })

    // await Joey.setCampus(Yale)


    


    

    
    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
