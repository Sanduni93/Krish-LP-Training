import java.lang.System.Logger.Level;

class CoRLogger{


	public static void main(String[] args) {
		
		Logger logger = Logger.getLogger(CorLogger.class.getName());
		logger.setLevel(Level.INFO);

		logger.log(Level.INFO, "this is info");
		logger.log(Level.WARNING, "this is warning");
		logger.log(Level.FINE, "this is fine");
		logger.log(Level.SEVERE, "this is severe");
	}
}