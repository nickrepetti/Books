using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace pacman-xna
{
    class Player : Sprite
    {
        private Texture2D textureLeft;
        private Texture2D textureRight;
        private Texture2D textureUp;
        private Texture2D textureDown;
        private Texture2D textureRightClosed;

        public Sprite playerOne = new Sprite();

        public void update(GameTime theGameTime, int gridPosition)
        {
            KeyboardState currentKeyboardState = Keyboard.GetState();

            if (gridPosition != 0)
            {
                if (currentKeyboardState.IsKeyDown(Keys.Left))
                {
                    playerOne.speed.X = 250;
                    playerOne.direction.X = -1;
                    playerOne.speed.Y = 0;
                    playerOne.direction.Y = 0;
                    //playerOne = textureLeft;
                }
                if (currentKeyboardState.IsKeyDown(Keys.Right))
                {

                    playerOne.speed.X = 250;
                    playerOne.direction.X = 1;
                    playerOne.speed.Y = 0;
                    playerOne.direction.Y = 0;
                    //playerOne = textureRight;
                }
                if (currentKeyboardState.IsKeyDown(Keys.Up))
                {
                    playerOne.speed.X = 0;
                    playerOne.direction.X = 0;
                    playerOne.speed.Y = 250;
                    playerOne.direction.Y = -1;
                    //playerOne = textureUp;
                }
                if (currentKeyboardState.IsKeyDown(Keys.Down))
                {
                    playerOne.speed.X = 0;
                    playerOne.direction.X = 0;
                    playerOne.speed.Y = 250;
                    playerOne.direction.Y = 1;
                    //playerOne = textureDown;
                }

                playerOne.position += playerOne.speed * playerOne.direction * (float)theGameTime.ElapsedGameTime.TotalSeconds;
            }

            if (playerOne.position.X > 800)
                playerOne.position.X = 0;
            if (playerOne.position.X < 0)
                playerOne.position.X = 800;

            if (playerOne.position.Y > 600)
                playerOne.position.Y = 0;
            if (playerOne.position.Y < 0)
                playerOne.position.Y = 600;
        }
    }
}
