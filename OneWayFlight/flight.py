def reconstructTrip(tickets):
    hash = {}
    # Preallocate route array with tickets length
    route = [None] * (len(tickets) - 1)

    for ticket in tickets:
        # First position of first ticket is none
        if tickets[0] == None:
            route[0] = ticket[1]
        # Hash each ticket with source(key) and dest(val)
        hash[ticket[0]] = ticket[1]

    # Grab each source's destination and add to our route
    for i in range(1, len(tickets) - 1):
        route[i] = hash[route[i - 1]]

    return route