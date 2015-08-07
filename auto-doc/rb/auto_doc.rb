class AutoDoc
  
  def initialize(selenium_web_driver)
    # driver must be an instance of selenium-webdriver
    $auto_doc_driver = selenium_web_driver
  end
  
  def set_driver(web_driver)
    $auto_doc_driver = web_driver
  end
  
  def set_dir(directory)
    
  end
  
  def driver
    $auto_doc  
  end
  
  
  
  
end
