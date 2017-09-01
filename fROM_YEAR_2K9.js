<HTML>
<HEAD><TITLE> The year 2000</TITLE></HEAD>
<BODY>
<H1> Countdown to the Year 2000</H1>
<Script Language="JavaScript">
now=new Date();
y2k=new Date("Jan 01 2000 00:00:00");
seconds=(now-y2k)/1000.0;
seconds=Math.round(seconds);
document.write("seconds from year 2000 is;"+seconds);
minutes=seconds/60.0;
minutes=Math.round(minutes);
document.write("<P>Minutes from the year 2000: ', Minutes);
</Script>
</body>
</HTML>


