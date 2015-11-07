/* Resource Clock

	Counts the Earth's human population and acres of productive land based 
	on 	information from the United Nations.

	The original script was written by Kevin McCann in March 1996, and revised 
	and updated by John Harris Stevenson at tranquileye.com/clock in 1999.

	This script may be used, but please retain proper credit. Also, be aware
	that this script depends on data that is non-static - the starting land
	and population numbers, as well as their rates of increase/decrease 
	are recalculated yearly. Check this site semi-regularly for the latest
	numbers.

    Copyright (C) 1996, 1999 Kevin McCann and John Harris Stevenson

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

function counter() {
	
    startpop 	= 	5946422755;
    startland 	=  	8596978646;
    poprate 	= 	2.4452;
    landrate 	= 	0.13035;

    today = new Date()
    startdatepop = new Date("February 1, 1999")
    startdateland = new Date("January 1, 1999")
    offset = today.getTimezoneOffset() * 60 * 1000

    diffpop = (( today.getTime() + offset ) - startdatepop.getTime() ) / 1000;
    diffland = (( today.getTime() + offset ) - startdateland.getTime() ) / 1000;

    var newpop = Math.ceil(startpop + (diffpop * poprate));
    newpop = "" + newpop;

    var newland = Math.ceil(startland - (diffland * landrate));
    newland = "" + newland;

    a1 = newpop.substring(0,1)
    a2 = newpop.substring(1,4)
    a3 = newpop.substring(4,7)
    a4 = newpop.substring(7,10)

    formpop = a1 + "," + a2 + "," + a3 + "," + a4; 

    b1 = newland.substring(0,1) 
    b2 = newland.substring(1,4)
    b3 = newland.substring(4,7)
    b4 = newland.substring(7,10)

    formland = b1 + "," + b2 + "," + b3 + "," + b4;

    document.time.pop.value = formpop;
    document.time.land.value = formland;

    setTimeout('counter()',200);
}
