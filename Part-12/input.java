import java.util.Scanner;

public class input {
    public static void main(String arr[]) {
        Scanner sc = new Scanner(System.in);
        int inputArray[] = new int[10];
        for (int i = 0; i < inputArray.length - 1; i++) {
            inputArray[i] = sc.nextInt();
        }
        for (int j = 0; j < inputArray.length - 1; j++) {
            System.out.println(inputArray[j]);
        }
    }
}