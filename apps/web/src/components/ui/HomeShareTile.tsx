import type { CmsHomeShareTile } from '@workspace/shared';

type HomeShareTileProps = {
  tile: CmsHomeShareTile;
};

export function HomeShareTile({ tile }: HomeShareTileProps) {
  return (
    <figure className="home-share-tile" style={{ gridArea: tile.area }}>
      <img src={tile.imageUrl} alt={tile.alt} />
    </figure>
  );
}
