# Heatmap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## My notes to project owner

### Full disclosure
Being new to Angular I did ask a coworker his advice on how to set up the table with the given JSON and he gave me a few pointers. Afterwards it did hit me that even though you didn't say I couldn't ask anyone questions that seems rather implied as it is a test of **my** ability to write the code. If that disqualifies me I totally understand and I am sorry for using up the time you gave evaluating my fit for this position. I've been learning a ton over the past couple weeks so I really appreciate this challenge.

### What needs work
I still need to set up the borders around the largest cluster, I am looking into the best way on how to do this. While I may be able to do this through manipulating the DOM it seems like I should be able to do this from the Angular side but I can't quite figure it out how to account for the gaps in a group of similar colors. As I learn more angular in the coming weeks I will revisit it even if this opportunity passes because I am very intrigued how to do it. Sadly it may require a rework from how how the table was set up.

I also plan to have the extra credit option to allow for multiple color spectrums (5 color, 10 color, ect). With how I refactored the colors to be simpler I think that this would be more doable.

## Development server

Run `node app.js` for the local API. If you navigate to `http://localhost:3000/api` you will find the JSON that was produced from the CSV file.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Assumptions
I didn't see anything about column order having to match the picture so I didn't worry so much about that.

I didn't see how specifically I should sort by. I didn't know if I should sort by all or some agregate of the row. In your example screenshot your top row was in the 60's, so I am not sure how you wanted it organized.

Since it didn't specify I had to access the CSV file on the server but it just stated the CSV file had to be pulled in with an HTTP Request. The script I found works with a local version so I took the liberty of downloading it locally.

## Future enhancements
You had mentioned in the instructions to list any possible optimizations so I listed some here.

### Change colors
Some may prefer a different color scheme that may match the positive and negative associations of other apps they use.

### Narrow down choices
It may be useful for the client to be able to narrow down to two countries or two seperate drivers.

### Graphs
Produce varoius types of graphs from the results to further illustrate trends.

### Produce reports
You can use the filtering and graphs ideas mentioned above to produce professional PDFs.

### Submit your own csv file
You could have the functionality to save and submit csv files.

### Stronger mobile compatibility
You could have a dropdown (or radio) showing the Country and a two column table with the driver and the country listed in the dropdown. Then you as the user changes the dropdown selection the column that has the numbers for that country would switch out. The only issue that occured was for some of the longer titles it changed where the width started changing just for that row, it starts to affect rows at around 700 pixels but becomes a little more distracting at around 550 pixels where it 

### Custimizable layout.
One idea I wanted to play with was the prospect of redoing the table in CSS Grid. You could explicitly name lines and rows and you could store the layout they choose as CSS in the databse. So for row Culture and column Europe the tag would have:
style = "grid-column-start: Europe; grid-row-start: Culture;"
This would have **vastly** simplified my table.component.html file since it could support a 2d layout I wouldn't had to nest into columns and rows. While this would have been one way to order the table data, without a database you would have to have to manually create a CSS file with several named fields.
You could even have some presets like sort by a certain column and then it would regenerate the data with the correst style tag.