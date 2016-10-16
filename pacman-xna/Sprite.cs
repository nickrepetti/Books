using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;

namespace pacman-xna
{
    class Sprite
    {
        public Vector2 position;
        public string assetName;
        public Rectangle size;
        public Vector2 speed;
        public Vector2 direction;

        private float mScale = 1.0f;
        private Texture2D spriteTexture;

        public float scale
        {
            get { return mScale; }
            set
            {
                mScale = value;
                size = new Rectangle(0, 0, (int)(spriteTexture.Width * scale), (int)(spriteTexture.Height * scale));
            }
        }

        public void loadContent(ContentManager theContentManager, string theAssetName)
        {
            spriteTexture = theContentManager.Load<Texture2D>(theAssetName);
            assetName = theAssetName;
            size = new Rectangle(0, 0, (int)(spriteTexture.Width * scale), (int)(spriteTexture.Height * scale));
        }

        public void draw(SpriteBatch theSpriteBatch)
        {
            theSpriteBatch.Draw(spriteTexture, position, new Rectangle(0, 0, spriteTexture.Width, spriteTexture.Height), Color.White, 0.0f, Vector2.Zero, scale, SpriteEffects.None, 0);
        }
    }
}
