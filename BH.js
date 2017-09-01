import java.io.*;
import java.util.Scanner;
import java.awt.Toolkit;
class BattleShip {
   public static int [][] OceanMap=new int[10][10];
   static int max=10;
   public static void main(String[] arguments){
	 
	   Scanner input = new Scanner(System.in);
	   for(int i=0;i<max;i++)
	   for(int j=0;j<max;j++)
	    OceanMap[i][j]=0;

     System.out.println("**** Welcome to Battleship game ****");
	 System.out.println(" ");
	 System.out.println("Right now, the sea is empty.");
	
	 int x, y;
	 boolean isAvail=false;
	 for(int i=0;i<5;i++){
	   do {
	    System.out.print("Enter X coordinate for your ship "+i+": ");
        x = input.nextInt();
	    System.out.print("Enter Y coordinate for your ship "+i+": ");
        y = input.nextInt();
		isAvail=isAvailable(x,y);
		if(isAvail)OceanMap[x][y]=1;
	    }while(isAvail==false);
	 }//user place the ships
	 System.out.println("Computer is deploying ships ");
	 for(int i=0;i<5;i++){
	 do {
	     x=(int) Math.floor(Math.random()*max);
		 y=(int) Math.floor(Math.random()*max);
		 isAvail=isAvailable(x,y);
		 if(isAvail){
			 OceanMap[x][y]=2;
			 System.out.println(i+" Computer ship deployed.");
	    	}
	   }while(isAvail==false);
	 }//i loop
	 displayOceanMap();
	 Battle();
	 //start the battle	 
   }//main function ends
   public static boolean isAvailable(int x, int y){
   		if(x>max || y>max)return false;
   		if(x<0 || y<0) return false;
   		if(OceanMap[x][y]==1 || OceanMap[x][y]==2)return false;
   		return true;
   }//function ends
   public static void displayOceanMap(){
     System.out.println("  0123456789  ");
     for(int i=0;i<max;i++){
	 System.out.print(i+"|");
	 for(int j=0;j<max;j++){
	     if(OceanMap[i][j]==2 || OceanMap[i][j]==0)System.out.print(" ");
		 else if(OceanMap[i][j]==1)System.out.print("@");
		 else if(OceanMap[i][j]==-1)System.out.print("x");
     }//j loop
	 System.out.println("|"+i);
  }//i loop
  System.out.println("  0123456789  ");
  }//ends function displayOcceanMap
  public static void Battle(){
	 Scanner input = new Scanner(System.in);
     System.out.println("Now the battle begins...");
	 boolean endGame=false;
	 int yourScore=0;
	 int computerScore=0;
	 boolean myTurn=true;
     int X, Y;
	 int [] ships=new int[2];
	 ships[0]=5;
	 ships[1]=5;
	 boolean isAvail=false;
	 while(endGame==false){	
		 do {
		 System.out.println("YOUR TURN: ");
		 System.out.print("Your X coordinate: ");
		 X=input.nextInt();
		 System.out.print("Your Y coordinate: ");
		 Y=input.nextInt(); 
		 }while(X>9 || Y>9 || OceanMap[X][Y]==-1);
         if(OceanMap[X][Y]==1){
			 yourScore-=1;
			 ships[0]--;
			 OceanMap[X][Y]=0;
			 System.out.println("You hit your own ship!!!");
		 }
		 else if(OceanMap[X][Y]==2){
			 yourScore+=1;
			 ships[1]--;
			 OceanMap[X][Y]=0;
			 Toolkit.getDefaultToolkit().beep();
			 System.out.println("BOOM! You sunk Computer's ship!");
			 }
		 else if(OceanMap[X][Y]==0){
		    System.out.println("You missed!");
		    OceanMap[X][Y]=-1;
	     }
        computerScore=ComputerPlay(ships, computerScore);
		displayOceanMap();
		System.out.println(" ");
       if(ships[0]==0){
		   System.out.println("Hooray! Computer won the battle.");
		   System.out.println("Computer ships: "+computerScore+" your ships: "+yourScore);
		   endGame=true;
	   } 
	   else if(ships[1]==0){
		   System.out.print("Hooray! You won the battle.");
		    System.out.println("Computer ships: "+computerScore+" your ships: "+yourScore);
		   endGame=true;
	   }
	 }
	
  }//Battle ends
  public static int ComputerPlay(int [] ships, int cScore){
	  System.out.println("COMPUTER'S TURN");
	  int x, y;
	  while(true) {
      x=(int) Math.floor(Math.random()*max);
	  y=(int) Math.floor(Math.random()*max);
	  if(OceanMap[x][y]!=-1)break;
	  };
      System.out.println("Computer selected x: "+x+ " y: "+y);
	  if(OceanMap[x][y]==2){
           ships[1]--;
		   OceanMap[x][y]=0;
		   System.out.println("Computer hit its own ship!!!");
	  }
	  else if(OceanMap[x][y]==1){
		   OceanMap[x][y]=0;
		   cScore++;
		   ships[0]--;
		   Toolkit.getDefaultToolkit().beep();
		   System.out.println("Computer hit your ship!");
	  }
	  else if(OceanMap[x][y]==0){
		  System.out.println("Computer missed!");
		  OceanMap[x][y]=-1;
	  }
	  return cScore;
  }
}//class ends