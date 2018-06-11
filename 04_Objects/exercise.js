function Book(title, author, alreadyRead){
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
}
var book = new Book("On the origin of species", "Charles Darwin", false);

//Que1)
console.log(Object.keys(book));

//Ques2)
console.log(book);
delete book.alreadyRead;
console.log(book);

//Ques3)
var len = 0;
for(key in book){
	len++;
}
console.log(len);

//Ques4)
function Books(title, author, alreadyRead){
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
}
var booksArray = [new Books("On the origin of species", "Charles Darwin", false), new Books("Walden", "Henry David Thoreau", false), new Books("The Discovery of India", "Jawaharlal Nehru", true), new Books("Two Lives", "Vikram Seth", true), new Books("Geetanjali", "Rabindranath Tagore", false)];
for(var i=0; i<booksArray.length; i++){
  if(booksArray[i].alreadyRead)
    var readText = "You already read";
  else
    var readText = "You still need to read";
console.log(readText +' "'+ booksArray[i].title + '" ' + 'by ' +booksArray[i].author);
}

//Ques5
function Cylinder(h, d) {
  this.h = h;
  this.d = d;
}
Cylinder.prototype.Volume = function () {
  var r = this.d / 2;
  return this.h * Math.PI * r * r;
};
var cyl = new Cylinder(7, 4);
console.log('volume ='+ cyl.Volume().toFixed(4));

//Ques6)
Array.prototype.bubbleSort_algo = function() 
{
for(var i=0; i<this.length-1;i++){
  for (var n = 0; n < this.length-i; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
      }
    }
}   
  return this;
};
console.log([6,4,0, 3,-2,1].bubbleSort_algo());

//Ques7)
String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String());

//Ques8)
function my_Clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  clock.run();

//Ques9)
function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

//Ques10)


//Ques11)
