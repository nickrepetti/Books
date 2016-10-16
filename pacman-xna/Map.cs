using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;

namespace pacman-xna
{
    class Map : Sprite
    {
        public int[] grid = null;
        private int MAPGRIDSIZE = 20;
        private int MAPWIDTH = 800;
        private int MAPHEIGHT = 600;
        private int gridCount = 0;
        public Texture2D mapTexture;
        public Vector2 mapPlacement = new Vector2(0, 0);

        public Map(int mapGridSize, int mapWidth, int mapHeight)
        {
            MAPGRIDSIZE = mapGridSize;
            MAPWIDTH = mapWidth;
            MAPHEIGHT = mapHeight;
        }

        public int getGridPosition(Vector2 thePosition)
        {
            for (int j = 0; j < MAPGRIDSIZE; j++)
            {
                if (thePosition.Y > j * MAPHEIGHT / MAPGRIDSIZE && thePosition.Y <= MAPHEIGHT / MAPGRIDSIZE * (j + 1))
                {
                    gridCount = MAPGRIDSIZE * j;

                    for (int i = 0; i < MAPGRIDSIZE; i++)
                    {
                        if (thePosition.X > i * MAPWIDTH / MAPGRIDSIZE && thePosition.X <= MAPWIDTH / MAPGRIDSIZE * (i + 1))
                            gridCount += i;
                    }
                }
            }
            return grid[gridCount];
        }

    }
}
