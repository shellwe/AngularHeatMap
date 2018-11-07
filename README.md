# Heatmap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `node app.js` for the local API. If you navigate to `http://localhost:3000/api` you will find the JSON that was produced from the CSV file.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Notes

First I wanted to thank you for your patience. I found this an excellent opportunity to resharpen my skills with Angular.

After this is submitted I still hope to work on it further to allow for more enhancements as I practice and improve in with angular and the data manipulation.

## Future enhancements

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
You could have a dropdown (or radio) showing the Country and a two column table with the driver and the country listed in the dropdown. Then you as the user changes the dropdown selection the column that has the numbers for that country would switch out.

### Custimizable layout.
One idea I wanted to play with was the prospect of redoing the table in CSS Grid. You could explicitly name lines and rows and you could store the layout they choose as CSS in the databse. So for row Culture and column Europe the tag would have:
style = "grid-column-start: Europe; grid-row-start: Culture;"
This would have been one way to order the table data but without a database it would have just been a CSS file with several named fields.
You could even have some presets like sort by a certain column and then it would regenerate the data with the correst style tag.