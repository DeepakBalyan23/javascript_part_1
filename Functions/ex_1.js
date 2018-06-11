function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('cricket player', 'spain', 'Shaq', 3);
tellFortune('actor', 'Japan', 'Ryan Gosling', 3000);
tellFortune('doctor', 'Russia', 'The Oatmeal', 0);