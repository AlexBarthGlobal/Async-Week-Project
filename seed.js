const { green, red } = require("chalk");
const { db } = require("./server/db");

const {Student, Campus, User} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({ force: true });

    // const Alex = await User.create({
    //   email: 'alex@email.com',
    //   password: '123'
    // })

    ///
    
    const Harvard = await Campus.create({
      campusName: 'Harvard University',
      address: 'Cambridge, MA',
      imageUrl: 'https://i0.wp.com/foreverlostintravel.com/wp-content/uploads/2020/02/Harvard-buildings.jpg?fit=688%2C516&ssl=1',
      description: 'You will come here and study every day. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
    
    const Joe = await Student.create({
      firstName: 'Joe',
      lastName: 'Owens',
      email: 'joeowens@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 4.0
    })
    await Joe.setCampus(Harvard)

    const Jason = await Student.create({
      firstName: 'Jason',
      lastName: 'Richards',
      email: 'jasonrichards@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8
    })
    await Jason.setCampus(Harvard)

    const Barry = await Student.create({
      firstName: 'Barry',
      lastName: 'Harolds',
      email: 'barryharolds@gmail.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9
    })
    await Barry.setCampus(Harvard)

    const Kim = await Student.create({
      firstName: 'Kim',
      lastName: 'Kazia',
      email: 'kimkazia@gmail.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8
    })
    await Kim.setCampus(Harvard)

    const Tom = await Student.create({
      firstName: 'Tom',
      lastName: 'Pizzaro',
      email: 'tompizzaro@gmail.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9
    })
    await Tom.setCampus(Harvard)

    ///
    
    const UCLA = await Campus.create({
      campusName: 'UCLA',
      address: 'Los Angeles, CA',
      imageUrl: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20198/5d72b4772cfac209ff04c634_Royce+Quad/Royce+Quad_hero.jpg',
      description: 'This place rocks! Party school! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })

    const Dan = await Student.create({
      firstName: 'Dan',
      lastName: 'Johnson',
      email: 'danjohnson@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.2
    })
    await Dan.setCampus(UCLA)

    const Jack = await Student.create({
      firstName: 'Jack',
      lastName: 'Thompson',
      email: 'jackthompson@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.7,
    })
    await Jack.setCampus(UCLA)
    
    const Filip = await Student.create({
      firstName: 'Filip',
      lastName: 'Leonardo',
      email: 'filipleonardo@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })
    await Filip.setCampus(UCLA)

    const Suzanne = await Student.create({
      firstName: 'Suzanne',
      lastName: 'Crawford',
      email: 'suzannecrawford@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })
    await Suzanne.setCampus(UCLA)

    const Stephanie = await Student.create({
      firstName: 'Stephanie',
      lastName: 'Bilal',
      email: 'stephaniebilal@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9,
    })
    await Stephanie.setCampus(UCLA)

    ///

    const Duke = await Campus.create({
      campusName: 'Duke University',
      address: 'Durham, NC',
      imageUrl: 'https://frontiersinblog.files.wordpress.com/2020/02/26628043971_c8c3a4a770_k.jpg',
      description: `Let's win some basketball tournaments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    })

    const Rick = await Student.create({
      firstName: 'Rick',
      lastName: 'Duun',
      email: 'rickduun@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.4
    })
    await Rick.setCampus(Duke)

    const Jody = await Student.create({
      firstName: 'Jody',
      lastName: 'Riin',
      email: 'jodyriin@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })
    await Jody.setCampus(Duke)
    
    const Thomas = await Student.create({
      firstName: 'Thomas',
      lastName: 'Bonds',
      email: 'thomasbonds@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.7,
    })
    await Thomas.setCampus(Duke)    

    const Theo = await Student.create({
      firstName: 'Theo',
      lastName: 'Clements',
      email: 'theoclements@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.7,
    })
    await Theo.setCampus(Duke)

    const Ramon = await Student.create({
      firstName: 'Ramon',
      lastName: 'Salazar',
      email: 'jackthompson@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })
    await Jack.setCampus(Duke)

    ///

    const Yale = await Campus.create({
      campusName: 'Yale University',
      address: 'New Haven, CT',
      imageUrl: 'https://i2.wp.com/www.opindia.com/wp-content/uploads/2020/08/shutterstock_517879ae.jpg?fit=1000%2C563&ssl=1',
      description: `Let's study some business. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    })

    const Avery = await Student.create({
      firstName: 'Avery',
      lastName: 'Lee',
      email: 'averylee@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9,
    })
    await Avery.setCampus(Yale)

    const Andrew = await Student.create({
      firstName: 'Andrew',
      lastName: 'Edwards',
      email: 'andrewedwards@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })
    await Andrew.setCampus(Yale)

    const Terrance = await Student.create({
      firstName: 'Terrance',
      lastName: 'Bolton',
      email: 'terrancebolton@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 4.0,
    })
    await Terrance.setCampus(Yale)

    const Juliette = await Student.create({
      firstName: 'Juliette',
      lastName: 'Watkins',
      email: 'juliettewatkins@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 4.0,
    })
    await Juliette.setCampus(Yale)

    const Ailya = await Student.create({
      firstName: 'Ailya',
      lastName: 'Clayton',
      email: 'ailyaclayton@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9,
    })
    await Ailya.setCampus(Yale)

    ///

    const Wyatt = await Student.create({
      firstName: 'Wyatt',
      lastName: 'Li',
      email: 'wyattli@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 4.0,
    })

    const Sahib = await Student.create({
      firstName: 'Sahib',
      lastName: 'Emery',
      email: 'sahibemery@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9,
    })
    
    const Katie = await Student.create({
      firstName: 'Katie',
      lastName: 'Nunez',
      email: 'katienunez@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.8,
    })

    const Nour = await Student.create({
      firstName: 'Nour',
      lastName: 'Rutledge',
      email: 'nourrutledge@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.9,
    })

    const Gene = await Student.create({
      firstName: 'Gene',
      lastName: 'Ryan',
      email: 'generyan@email.com',
      imageUrl: 'https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg',
      gpa: 3.7,
    })

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
