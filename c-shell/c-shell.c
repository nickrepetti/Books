#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <stdlib.h>
#include <string.h>
#include <termios.h>

const int MAX_HIST = 10;

void rmLineFeed( char* );

int main( ){
  char *token;
  int cnt, j, pid, status, len = 0;
  char hist[MAX_HIST][100];
  int curHist = 0, histCnt = 0, numInpt = 0;
  int numDel = 0;

  //  Configure Termios
  struct termios origConfig;
  tcgetattr( 0, &origConfig );
  struct termios newConfig = origConfig;
  newConfig.c_lflag &= ~( ICANON | ECHO );
  newConfig.c_cc[VMIN] = 1;
  newConfig.c_cc[VTIME] = 2;
  tcsetattr( 0, TCSANOW, &newConfig );

  while ( 1 ){
    cnt = 0;
    char *buf = ( char * )malloc( 100 );
    char *inpt = ( char * ) malloc( 100 );
    char *buffer = ( char * ) malloc( 2 );
    char *cmd[20];

    //  Display current directory
    getcwd( buf, 100 );
    printf( "%s# ", buf );
    free( buf );

    //  Read input through a buffer
    while ( 1 ){
      fgets( buffer, 2, stdin );

      //  Check for arrow keys
      if ( buffer[0] == 27 ){
    fgets( buffer, 2, stdin );

    if ( buffer[0] == 91 ){
      fgets( buffer, 2, stdin );

      //  Ignore the left and right arrow keys
      if ( buffer[0] == 67 || buffer[0] == 68 )
        continue;
      else if ( buffer[0] == 65 ){
        //  UP ARROW

        if ( histCnt != 0 ){
          //  Clear Screen

          if ( strlen( inpt ) > 0 ){
            for ( j = 0; j < numInpt; j++ ){
              printf( "\b \b" );
              inpt[strlen(inpt)-1] = 0;
            }
          }
          //  Print history to screen
          printf( hist[curHist] );
          strcpy( inpt, hist[curHist] );
          numInpt = strlen( hist[curHist] );
          numDel = 0;
          curHist--;

          if ( curHist < 0 )
            curHist = 0;
        }

        continue;

      }
      else if ( buffer[0] == 66 ){
        //  DOWN ARROW PRESSED

        if ( histCnt != 0 ){
                //  Clear Screen
          if ( strlen( inpt ) > 0 ){
            for ( j = 0; j < numInpt; j++ ){
              printf( "\b \b" );
          inpt[strlen(inpt)-1] = 0;
            }
          }
          //  Print history to screen
          printf( hist[curHist] );
          strcpy( inpt, hist[curHist] );
          numInpt = strlen( hist[curHist] );
          numDel = 0;

          curHist++;

          if ( curHist >= histCnt )
            curHist = histCnt-1;
        }

        continue;
      }
    }
      }
      else if ( buffer[0] == 127 || buffer[0] == 8 ){
    //  Delete key pressed
    if ( numDel < numInpt ){
      printf( "\b \b" );
      inpt[strlen(inpt)-1] = 0; //  Remove from input
      numDel++;
    }
    continue;
      }

      printf( "%s", buffer );
      strcat( inpt, buffer );

      if ( strcmp( buffer, "\n" ) == 0 ){
    if ( strcmp( inpt, "\n" ) != 0 ){
      if ( histCnt == MAX_HIST-1 ){
        for ( j = 0; j < histCnt; j++ )
          strcpy( hist[j], hist[j+1] );
      }

      rmLineFeed( inpt );
      strcpy( hist[histCnt], inpt );

      curHist = histCnt;
      histCnt++;

      if ( histCnt > MAX_HIST-1 )
        histCnt = MAX_HIST-1;
    }

    numInpt = 0;
    numDel = 0;
        break;
      }
      else {
    numInpt++;
      }
    }

    if ( strcmp( inpt, "\n" ) == 0 ){
      //  Clear the input and keep going
      free( inpt );
      continue;
    }
    else if ( strcmp( inpt, "exit" ) == 0 ){
      //  Clear the input and exit
      free( inpt );
      break;
    }

    //  Parse input into a command
    token = strtok ( inpt," \n" );

    while ( token != NULL ){
      cmd[cnt] = token;
      token = strtok ( NULL, " \n" );
      cnt++;
    }

    //  NULL Terminate the command array
    cmd[cnt] = NULL;

    //  Change Directory Command
    if ( strcmp( cmd[0], "cd" ) == 0 ){
      if ( chdir( cmd[1] ) != 0 )
    perror( NULL );
    }
    else {
      //  Start to execute the command
      pid = fork();

      if ( pid > 0 ){
        waitpid( pid, &status, WUNTRACED );
      }
      else if ( pid == 0 ){
        execvp( cmd[0], cmd );
        perror( NULL );
        exit( 1 );
      }
      else{
        printf( "Forking Error" );
        exit( 1 );
      }
    }

    //  Clear the input
    free( inpt );
  }

  tcsetattr( 0, TCSANOW, &origConfig );

  return 0;
}

void rmLineFeed( char *b ){
  int len = strlen( b );

  if ( len <= 0 )
    return;

  if ( strcmp( &b[len-1], "\n" ) == 0 )
    b[len-1] = '\0';
}
