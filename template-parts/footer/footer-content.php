

   <?php if(defined( 'DEVM' )): ?>
      <?php if( is_active_sidebar('footer-left') || is_active_sidebar('footer-center') || is_active_sidebar('footer-right') ): ?>
         <footer class="xs-footer solid-bg-two xs-footer-classic" >
            <div class="container">
               <div class="row">
                  <div class="col-lg-4 col-md-12">
                     <?php  dynamic_sidebar( 'footer-left' ); ?>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <?php  dynamic_sidebar( 'footer-center' ); ?>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <?php  dynamic_sidebar( 'footer-right' ); ?>
                  </div>
                  <!-- end col -->
               </div>
           </div>
         </footer>
      <?php endif; ?>
   <?php endif; ?>
   
   <div class="copy-right">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">

                     <div class="copyright-text">
                     <?php
                           $copyright_text = qoxag_option('footer_copyright', 'Copyright &copy; '. date('Y') .' Qoxag. All Right Reserved.');
                        echo qoxag_kses($copyright_text);
                     ?>
                     </div>
               </div>
            </div>
            <!-- end row -->
         </div>
   </div>
