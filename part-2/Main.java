import java.util.Scanner;

public class Main {

	public static void printRectangle(int heigth, int width) {
		if (heigth == width || heigth - width > 5 || width - heigth > 5)
			System.out.println("The area of the tower is: " + heigth * width);
		else
			System.out.println("The circumference of the rectangle is: " + (2 * (heigth + width)));
	}

	public static void printScopeTriangle(int heigth, int width) {
		double shok, base = (double) (width / 2);
		shok = Math.sqrt(base * base + heigth * heigth);
		System.out.println("The circumference of the triangle is: " + ((2 * shok) + width));
	}

	public static void printRow(int numSpace, int numToDraw){
        	for(int i=0;i<numSpace;i++){
        		System.out.print(" ");
        	}
        	for(int i=0;i<numToDraw;i++){
        		System.out.print("*");
        	}
		System.out.println();
    	}
	
	public static void printTriangle(int heigth, int width) {
        	if(width%2==0||width>2*heigth)
        		System.out.println("cannot print the triangle!");
		else if(width==1||width==3){
			printRow(width/2,1);
			for(int i=1;i<heigth;i++){
                		printRow(0,width);
            		}
        	}
        	else{
			int i=1;
			int tmp=(heigth-2)/(width/2-1);
			int rest=(heigth-2)%(width/2-1);
			int space=width/2;
			int numToDraw=1;
			printRow(space,numToDraw);
			numToDraw+=2;space--;
			while(i<heigth-1){
				if(i==1){
					for(int j=0;j<rest;j++,i++){
						printRow(space,numToDraw);
					}
				}
				for(int j=0;j<tmp;j++,i++){
					printRow(space,numToDraw);
				}
				numToDraw+=2;space--;
			}
			printRow(0,width);
		}
	}

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int opt = 0, heigth, width;
		while (true) {
			System.out.println("Which tower do you want?\nFor a rectangle press 1, for a triangle press 2 to exit the program press 3");
			opt = in.nextInt();
			if (opt == 3)
				break;
			System.out.println("Enter the height of the tower");
			heigth = in.nextInt();
			System.out.println("Enter the width of the tower");
			width = in.nextInt();
			if (opt == 1) 
				printRectangle(heigth, width);
			else {
				System.out.println("Press 1 to calculate the perimeter of the triangle, press 2 to print the triangle.");
				opt = in.nextInt();
				if (opt == 1)
					printScopeTriangle(heigth, width);
				else if (opt == 2)
					printTriangle(heigth, width);
			}
			System.out.println("------------------------------------------------");
		}
	}
}
