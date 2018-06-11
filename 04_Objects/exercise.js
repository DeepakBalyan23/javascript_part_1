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
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

var sort_by = function(field_name, reverse, initial){

   var key = initial ?
       function(x)
             {
               return initial(x[field_name]);
             } :
       function(x) 
             {
               return x[field_name];
             };

   reverse = !reverse ? 1 : -1;

   return function (x, y) {
       return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
     } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);

//Ques11)
function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

//Ques13)
function Student(name) {
  this.name = name;
}
var keys = [];
Student.prototype.rollno = true;
var obj = new Student("Sara");
for (var key in obj) {
  keys.push(key);
}
console.log(keys);


//Ques14)
console.log(Object.values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));console.log(Object.values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));console.log(Object.values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));console.log(Object.values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));console.log(Object.values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
}

console.log(all_properties(Math));

console.log(all_properties(Array));

//Ques12)
function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

//Ques13)
function Student(name) {
  this.name = name;
}
var keys = [];
Student.prototype.rollno = true;
var obj = new Student("Sara");
for (var key in obj) {
  keys.push(key);
}
console.log(keys);


//Ques14)
console.log(Object.values({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


//Ques15)
var obj = { title: 'Bill Gates',author: 'The Road Ahead',libraryID: 1254};
var obj2 = new Object();
for(var key in obj){
  obj2[obj[key]] = key;
}
console.log(obj2);


//Ques16)

