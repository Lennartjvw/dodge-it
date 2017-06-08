/**
 * Utils
 */
class Utils {
    //
    // kijk of twee objecten elkaar raken
    // dit moeten objecten zijn die een public x, y, width en height hebben
    // met overerving kunnen we gaan zorgen dat je hier ook andere objecten behalve ball en paddle aan kan geven
    //

    hasOverlap(c1: GameObject, c2: GameObject): boolean {
        return !(
          c2.getX() > c1.getX() + c1.getWidth() ||
          c2.getX() + c2.getWidth() < c1.getX() ||
          c2.getY() > c1.getY() + c1.getHeight() ||
          c2.getY() + c2.getHeight() < c1.getY()
        );
    }
}