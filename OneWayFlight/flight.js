// Restatement of problem: tickets containing source/destination airport
// They have got mixed out of order and we need to sort them back together
// Tickets contain a SOURCE (from) and DESTINATION (to) stored in subarrays
// Order is determined by matching destination (el 2) to proper source (el 1)
// In other words, you must go to the source before it can become a destination
// So we can find the first ticket and last ticket easily as those would be null
// The function should return an array of all the airports sorted in the right order

function reconstructTrip(tickets) {
    // Use an object as a defacto hashtable to associate sources w/ dest
    let hash = {};
    // Create a route array preallocated with the proper length
    let route = Array(tickets.length - 1);
    console.log(route);
    
    tickets.forEach(ticket => {
        // First ticket as null at first position
        if (ticket[0] === null) route[0] = ticket[1];
        // Hash ticket with source as key and dest as value
        hash[ticket[0]] = ticket[1];
        console.log(hash);
    });

    // Loop through object to grab dest associated with source
    for (let i = 1; i < tickets.length - 1; i++) {
        route[i] = hash[route[i - 1]];
    }
}

const tickets = [
    ['PIT', 'ORD'],
    ['XNA', 'CID'],
    ['SFO', 'BHM'],
    ['FLG', 'XNA'],
    [null, 'LAX'], 
    ['LAX', 'SFO'],
    ['CID', 'SLC'],
    ['ORD', null],
    ['SLC', 'PIT'],
    ['BHM', 'FLG'],
  ];

  reconstructTrip(tickets);